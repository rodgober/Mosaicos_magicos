import React, {Fragment, useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ReplayIcon from '@material-ui/icons/Replay';
import styles from './Controles.module.css';
import { SimpleMediaQuery } from '../helper';
import programaContext from '../context/programa/programaContext';

const Controles = () => {

    const instruccionesContext = useContext(programaContext);
    const { xx, setXX, yy, setYY, direccion, setDireccion, programa } = instruccionesContext;    
    let equis = xx;

    let fontsize = 35;
    if (SimpleMediaQuery('(max-width: 768px)')){
        fontsize = 20;
    }

    const [idInstruccion, setidInstruccion] = useState(-1);
    const [posCol, setposCol] = useState(1);
    const [posRen, setposRen] = useState(1);
    const [posRobot, setposRobot] = useState([1,1]);

    function origen() {
        setXX(1);
        setYY(1);
    };
    function giraRobot(grados){
        let posicion = (grados / 90) + direccion;
        if (posicion > 4){
            posicion = posicion % 4;
        }
        setDireccion(posicion);
    }
    function avanza(casillas){
        switch (direccion) {
            case 1:
                setXX(equis + casillas);
                break;
            case 2:
                setYY(yy + casillas);
                break;
            case 3:
                setXX(equis - casillas);
                break;
            case 4:
                setYY(yy - casillas);
                break;
        }
    }

    const ejecuta = (instruccion, milliseconds) => {
        console.log('Direccion: ', direccion, 'Casilla en X: ', equis, 'Casilla en Y: ', yy);
        console.log('Instruccion id: ', instruccion.id, 'Instrucción tipo: ', instruccion.tipo, 'instruccion n:', instruccion.n);
        switch (instruccion.tipo) {
            case 1:
                origen();
                break;
            case 5:
                giraRobot(instruccion.n);
                break;
            case 7:
                avanza(instruccion.n);
                break;
        }
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const ejecutar = e => { 
        const doSomething = async () => {
            for (const instruccion of programa) {
                console.log('antes de ejecutar ', instruccion.tipo)  
               await ejecuta(instruccion, 5000)
                console.log('después de ejecutar ', instruccion.tipo)    
            }
            console.log('FIN');
        }
        if (programa.length < 1){
            alert('Programa vacío')
        }else{ 
            doSomething()
        }

    }
    const stop = e => { 
        alert('stop');
    }
    const next = e => { 
        alert('next');
    }
    const reset = e => { 
        setposCol(1);
        setposRen(1);
        setposRobot([1,1]);
    }

    return ( 
        <div className={`${styles.cont_controles}`}  >
            <Button 
                style={{minWidth: '24px'}}
                type="button"
                onClick={e => stop()}
            >
                <StopIcon
                    style={{ minWidth: '24px', fontSize: fontsize }}
                ></StopIcon>
            </Button>
            <Button
                style={{minWidth: '24px'}}
                type="button"
                onClick={e => ejecutar()}
            >
                <PlayArrowIcon
                    style={{ minWidth: '24px', fontSize: fontsize  }}
                ></PlayArrowIcon>
            </Button>
            <Button
                type="button"
                onClick={e => next()}
                style={{minWidth: '24px'}}
            >
                <SkipNextIcon
                    style={{ minWidth: '24px', fontSize: fontsize  }}
                ></SkipNextIcon>
            </Button>
            <Button
                type="button"
                onClick={e => reset()}
                style={{minWidth: '24px'}}
            >
                <ReplayIcon
                    
                    style={{ minWidth: '24px', fontSize: fontsize }}
                ></ReplayIcon>
            </Button>
        </div>
     );
}
 
export default Controles;