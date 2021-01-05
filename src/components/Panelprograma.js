import React, { useState, useContext } from 'react';
import Instruccion from './Instruccion';
import Nuevainstruccion from './Nuevainstruccion';
import programaContext from '../context/programa/programaContext';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import styles from './Panelprograma.module.css';

const Panelprograma = () => {


    const programaContexto = useContext(programaContext);
    const { programa } = programaContexto;

    const [nvaInstruccion, setnvaInstruccion] = useState(false);
    return ( 
        <div>
            <div className={`${styles.inicio}`}>
                Inicio del programa
            </div>

            <ul>
                {programa.length === 0 
                ? null
                : (programa.map(instruccion => (
                    <Instruccion
                        key={instruccion.id}
                        instruccion={instruccion}
                    ></Instruccion>
                        
                )))
                }
            </ul>
            <div className={`${styles.fin}`}>
                Fin del programa
            </div>



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
                        style={{ fontSize: 35 }}
                    ></AddIcon> Agregar instrucción
                </Button>
            
        </div>
     );
}
 
export default Panelprograma;