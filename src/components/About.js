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
            <div className={`${styles.con_creditos}`}>
                <div>
                    <h1>Conceptualización</h1>
                    <h2>Enrique Calderón Alzati</h2>
                </div>

                <div>
                    <h1>Desarrollo de software</h1>
                    <h2>Rodrigo González Bernardino</h2>
                </div>

                <div>
                    <h1>Diseño</h1>
                    <h2>Firelei Calderón Macías</h2>
                </div>
            </div>
            <Footer>

            </Footer>
        </Fragment>
     );
}
 
export default About;