import React, { useContext } from 'react';
import styles from './Sala.module.css';
import Horno from './Horno';
import Murales from './Murales';
import Collages from './Collages';
import Almacenes from './Almacenes';
import Almacencollages from './Almacencollages';
import Programacion from './Programacion'
import Robot from './Robot'

import ProgramaState from '../context/programa/programaState';

import salaContext from '../context/salas/salaContext'

const Sala = () => {
    const salaContexto = useContext(salaContext);
    const { sala } = salaContexto;
    const canvasAlmacenes = React.createRef();
    const canvasAlmcollages = React.createRef();
    const canvasRobot = React.createRef(); // Crea la referencia del mosaico que carga el Robot

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
                return <div className={`${styles.collages}`}>
                        <Collages
                                ref = {canvasAlmcollages}
                        > </Collages>
                        <Almacencollages
                                ref = {canvasAlmcollages}
                        >
                        </Almacencollages> 
                        </div>;
            case 4:
            return <div className={`${styles.programacion}`}>
                         <ProgramaState>
                           <Robot
                                ref={canvasRobot}

                           />

                                <Programacion
                                    ref = {canvasAlmacenes}
                                > </Programacion>
                                <Almacenes
                                    ref = {canvasAlmacenes}
                                >
                                </Almacenes> 
                            
                        </ProgramaState>
                    </div>;
            default:
                return <div className={`${styles.mosaicos}`}>
                            <Horno
                                ref = {canvasAlmacenes}
                            > </Horno>
                            <Almacenes
                                ref = {canvasAlmacenes}
                            >
                         </Almacenes>     
                        </div>;
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