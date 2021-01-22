import React, { Fragment } from 'react';
import Header from './Header';
import Secciones from './Secciones';
import Sala from './Sala';
import Footer from './Footer';


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
            <Footer>
                
            </Footer>
        </Fragment>
     );
}
 
export default Juegayaprende;