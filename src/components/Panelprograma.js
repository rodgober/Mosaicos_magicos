import React, { useState } from 'react';
import Nuevainstruccion from './Nuevainstruccion';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import styles from './Panelprograma.module.css';

const Panelprograma = () => {
    const [nvaInstruccion, setnvaInstruccion] = useState(false);
    return ( 
        <div>
            <div className={`${styles.inicio}`}>
                Inicio del programa
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
            <div className={`${styles.fin}`}>
                Fin del programa
            </div>
        </div>
     );
}
 
export default Panelprograma;