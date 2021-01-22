import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const fecha = new Date().getFullYear();
    return ( 
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer_contenedor}`}>
                <p className={`${styles.copyright}`}
                >Todos los derechos reservados &copy; {fecha} </p>
                <p className={`${styles.version}`}
                >Versión 0.11.0 Enero 2021 </p>
                <p className={`${styles.copyright}`} >
                    <a 
                    href='/about' target="_blank" >Créditos</a>
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;