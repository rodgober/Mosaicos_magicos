import React, {Fragment, useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ReplayIcon from '@material-ui/icons/Replay';
import styles from './Controles.module.css';
import { SimpleMediaQuery, obtenerXDelMosSeleccionado } from '../helper';
import programaContext from '../context/programa/programaContext';
import salaContext from '../context/salas/salaContext';


const milliseconds = 1000;
const Controles = React.forwardRef((props, ref) => {
    
    const instruccionesContext = useContext(programaContext);
    const { xx, setXX, yy, setYY, direccion, setDireccion, programa, instActual, setinstActual } = instruccionesContext;   
    const canvasAlmacenes = ref;  // Toma la referencia del canvas del Almacen que se pasa por parámetro en la llamada del componente 
    const canvasMosaico = React.createRef(); //Crea la referencia del canvas del Mural donde se pegan los mosaicos
    let {setCopia, setPega, setgiraMosaico } = props;
    const salaContexto = useContext(salaContext);
    const { largo, separacion, alto, setMosSeleccionado} = salaContexto;

    let fontsize = 35;
    if (SimpleMediaQuery('(max-width: 768px)')){
        fontsize = 20;
    }



    async function avanza(casillas) {
        console.log('Avanza: ',casillas, ' casillas-' )
        switch (direccion) {
            case 1:
                await moverEnX(xx + casillas);
                break;
            case 2:
                await moverEnY(yy + casillas);
                break;
            case 3:
                await moverEnX(xx - casillas);
                break;
            case 4:
                await moverEnY(yy - casillas);
                break;
        }
    }

    async function iralmacen(posicion) {
        let tmpX = xx;
        let tmpY = yy;
        await moverEnY(14);
        await moverEnX(posicion);
        setMosSeleccionado(posicion);
        await copiadealmacen(true);
        await copiadealmacen(false);
        await moverEnX(tmpX);
        await moverEnY(tmpY);
    }

    async function ejecutar() {
        if (programa.length < 1){
            alert('Programa vacío')
        }else{ 
            for (const instruccion of programa) {
                console.log('antes de ejecutar ', instruccion.nombre)  
                await ejecuta(instruccion, milliseconds)
                console.log('después de ejecutar ', instruccion.nombre)    
            }
            console.log('Terminó de ejecutar el programa');
        }
    }



    const ejecuta = async (instruccion) => {
        console.log(instruccion);
        switch (instruccion.tipo) {
            case 1:
                await moverEnX(1);
                await moverEnY(1);
                break; 
            case 2:
                await iralmacen(instruccion.n);
                break;
            case 4:
                await pega(true);
                await pega(false);
                break;
            case 5:
                giraRobot(instruccion.n);
                break;
            case 6:
                await giraMosaico(instruccion.n);
                break; 
            case 7:
                avanza(instruccion.n);
                break; 
        }
        return Promise.resolve(1);
    }

    const next = async () => {
        console.log('Instrucción actual: ', instActual);
        await ejecuta(programa[instActual], milliseconds);
        setinstActual(instActual + 1);
        console.log('Listo!!!');
        console.log('La próxima Instrucción actual: ', instActual);
    }

    /***** INSTRUCCIONES ASYNCRONAS QUE SIMULAN SER SINCRONAS*/
    function moverEnX(valor) {
        return new Promise(resolve => {
            setTimeout(() => {
                setXX(valor);
                resolve(valor);
              }, milliseconds);
        });
    }

    function moverEnY(valor) {
        return new Promise(resolve => {
            setTimeout(() => {
                setYY(valor);
                resolve(valor);
              }, milliseconds);
        });
    }

    function copiadealmacen(bandera){
        return new Promise(resolve => {
            setTimeout(() => {
                setCopia(bandera);
                resolve(1);
              }, milliseconds);
        });
    }

    function pega(bandera) {
        return new Promise(resolve => {
            setTimeout(() => {
                setPega(bandera);
                resolve(1);
              }, milliseconds);
        });
    }

    function giraRobot(grados){
        let posicion = (grados / 90) + direccion;
        if (posicion > 4){
            posicion = posicion % 4;
        }
        return new Promise(resolve => {
            setTimeout(() => {
                setDireccion(posicion);
                resolve(1);
              }, milliseconds);
        });
    }

    function giraMosaico(grados) {
        return new Promise(resolve => {
            setTimeout(() => {
                setgiraMosaico(grados);
                resolve(1);
              }, milliseconds);
        });        
    }

    /***** FIN INSTRUCCIONES ASYNCRONAS QUE SIMULAN SER SINCRONAS*/
    const reset = e => { 
        setXX(1);
        setYY(1);
        setinstActual(0);
    }

    return ( 
        <div className={`${styles.cont_controles}`}  >
            <Button 
                style={{minWidth: '24px'}}
                type="button"
            >
                <StopIcon
                    style={{ minWidth: '24px', fontSize: fontsize }}
                ></StopIcon>
            </Button>
            <Button
                style={{minWidth: '24px'}}
                type="button"
                onClick={e => ejecutar()}
                disabled={true}
            >
                <PlayArrowIcon
                    style={{ minWidth: '24px', fontSize: fontsize  }}
                ></PlayArrowIcon>
            </Button>
            <Button
                type="button"
                style={{minWidth: '24px'}}
                onClick={e => next()}
                disabled={((programa.length === 0) || (instActual >= programa.length))}
            >
                <SkipNextIcon
                    style={{ minWidth: '24px', fontSize: fontsize  }}
                ></SkipNextIcon>
            </Button>
            <Button
                type="button"
                style={{minWidth: '24px'}}
            >
                <ReplayIcon
                    onClick={e => reset()}
                    style={{ minWidth: '24px', fontSize: fontsize }}
                ></ReplayIcon>
            </Button>
        </div>
     );
});
 
export default Controles;