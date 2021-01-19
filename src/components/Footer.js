import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const fecha = new Date().getFullYear();
    return ( 
        <footer className={`${styles.footer}`}>
            <p>Todos los derechos reservados &copy; {fecha} </p>
            <a href='/about' target="_blank" >Información</a>
        </footer>
     );
}
 
export default Footer;
