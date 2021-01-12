import React, { Fragment } from 'react';
import Header from './Header';
import Secciones from './Secciones';
import Sala from './Sala';


const Juegayaprende = () => {
    return ( 
        <Fragment>
            <div className="vertical" ></div>
            <Header>

            </Header>
            
            <div className="contenedor-app">
                <Secciones>
                </Secciones> 
                <Sala>
                </Sala>
            </div> 
        </Fragment>
     );
}
 
export default Juegayaprende;