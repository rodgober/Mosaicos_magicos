import React, { Fragment, useContext } from 'react';
import Header from './Header';
import Secciones from './Secciones';
import Almacenes from './Almacenes';
import Horno from './Horno';
import Murales from './Murales'
import Collages from './Collages'
import Programacion from './Programacion'

import salaContext from '../context/salas/salaContext'

const Juegayaprende = () => {
    const salaContexto = useContext(salaContext);
    const { sala } = salaContexto;
    const canvasAlmacenes = React.createRef();

    const mostrarSala = () => {

        switch (sala) {
            case 1:
                return <Horno
                    ref = {canvasAlmacenes}
                > </Horno>;
            case 2:
                return  <Murales
                            ref = {canvasAlmacenes}
                        > </Murales>;
            case 3:
                return <Collages> </Collages>;
            case 4:
                return <Programacion> </Programacion>;
            default:
                return <Horno
                ref = {canvasAlmacenes}
                > </Horno>;
        }
    }

    return ( 
        <Fragment>
            <Header>

            </Header>
            <div className="contenedor-app">

                <Secciones>

                </Secciones>
                <div className="seccion-principal">
                    <main>
                        {mostrarSala()}
                    </main>
                    <Almacenes
                        ref = {canvasAlmacenes}
                    >
                    </Almacenes>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Juegayaprende;