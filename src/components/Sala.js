import React, { Fragment, useContext } from 'react';
import styles from './Sala.module.css';
import Almacenes from './Almacenes';
import Almacencollages from './Almacencollages';
import Horno from './Horno';
import Murales from './Murales'
import Collages from './Collages'
import Programacion from './Programacion'

import salaContext from '../context/salas/salaContext'

const Sala = () => {
    const salaContexto = useContext(salaContext);
    const { sala } = salaContexto;
    const canvasAlmacenes = React.createRef();
    const canvasAlmcollages = React.createRef();

    const mostrarSala = () => {

        switch (sala) {
            case 1:
                return <div className={`${styles.mosaicos}`}>
                            <Horno
                                ref = {canvasAlmacenes}
                            > </Horno>
                            <Almacenes
                                ref = {canvasAlmacenes}
                            >
                            </Almacenes>  
                        </div>;
            case 2:
                return  <div className={`${styles.murales}`}>
                            <Murales
                                ref = {canvasAlmacenes}
                            > </Murales>
                            <Almacenes
                                ref = {canvasAlmacenes}
                            >
                            </Almacenes>
                        </div>;
            case 3:
                return <div className={`${styles.murales}`}>
                        <Collages
                                ref = {canvasAlmcollages}
                        > </Collages>
                        <Almacencollages
                                ref = {canvasAlmcollages}
                        >
                        </Almacencollages>
                        </div>;
            case 4:
                return <Programacion> </Programacion>;
            default:
                return <Fragment>
                            <Horno
                                ref = {canvasAlmacenes}
                            > </Horno>
                            <Almacenes
                                ref = {canvasAlmacenes}
                            >
                            </Almacenes> 
                        </Fragment>;
        }
    }
    return ( 
        <div className="seccion-principal">
                <main>
                    {mostrarSala()}
                </main>
        </div>
     );
}
 
export default Sala;