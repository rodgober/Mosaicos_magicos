import React, { Fragment } from 'react';
import Footer from './Footer'
import styles from './About.module.css';
const logo = require('./images/LogoMM.png');


const About = () => {
    return ( 
        <Fragment>
            <header className={`${styles.header}`}>
                <div className={`${styles.header_contenedor}`}>
                    <div className={`${styles.logo}`}>
                        <a href="/">
                            <img
                                className={`${styles.img_logo}`}
                                src={logo.default}
                                alt="Mosaicos mágicos"
                                />
                        </a>
                    </div>
                </div>
            </header>
            <h1>Conceptualización</h1>
            <h2>Enrique Calderón Alzati</h2>

            <h1>Desarrollo de software</h1>
            <h2>Rodrigo González Bernardino</h2>

            <h1>Diseño</h1>
            <h2>Firelei Calderón Macías</h2>
            <Footer>

            </Footer>
        </Fragment>
     );
}
 
export default About;