import React, { useState, useContext } from 'react';
import Instruccion from './Instruccion';
import Nuevainstruccion from './Nuevainstruccion';
import programaContext from '../context/programa/programaContext';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import styles from './Panelprograma.module.css';
import { SimpleMediaQuery } from '../helper';


const Panelprograma = () => {


    const programaContexto = useContext(programaContext);
    const { programa, eliminarInstruccion, instActual } = programaContexto;
    let minwidth = '72px'; //el tamaño de los botones del toolbar y depende del tamaño de pantalla

    const [nvaInstruccion, setnvaInstruccion] = useState(false);

    if (SimpleMediaQuery('(max-width: 768px)')){
        minwidth = '22px';
    }

    return ( 
        <div className={`${styles.cont_panelprograma}`}  >
            <div className={`${styles.inicio}`}>
                Inicio del programa
            </div>

            <ul className={`${styles.instrucciones}`}>
                {programa.length === 0 
                ? null
                : (programa.map(instruccion => (
                    <Instruccion

                        key={instruccion.id}
                        instruccion={instruccion}
                        eliminarInstruccion = {eliminarInstruccion}
                        instActual = {instActual}
                    ></Instruccion>
                        
                )))
                }
            </ul>
            <div className={`${styles.fin}`}>
                Fin del programa
            </div>

            <div className={`${styles.nvaInstruccion}`}>

                {(nvaInstruccion)?(<Nuevainstruccion
                                        nvaInstruccion = {nvaInstruccion}
                                        setnvaInstruccion = {setnvaInstruccion}
                                    ></Nuevainstruccion>)
                :null}
                
                    <Button
                        type="button"
                        onClick={ () => setnvaInstruccion(true) }
                    >
                        <AddIcon
                            style={{ minWidth: minwidth, fontSize: 35 }}
                        ></AddIcon> Agregar instrucción
                    </Button>
                </div>
            
        </div>
     );
}
 
export default Panelprograma;