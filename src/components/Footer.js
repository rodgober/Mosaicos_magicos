import React, {useContext} from 'react';
import salaContext from '../context/salas/salaContext';
import styles from './Footer.module.css';

const Footer = () => {
    const fecha = new Date().getFullYear();
    const salaContexto = useContext(salaContext);
    const { mostrarSala } = salaContexto;
    const onClickMostrarSala = (valor) => {
        mostrarSala(valor);
    }
    return ( 
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer_contenedor}`}>
                <p className={`${styles.copyright}`}
                >Todos los derechos reservados &copy; {fecha} </p>
                <p className={`${styles.version}`}
                >Versión 0.11.0 Enero 2021 </p>
                <p className={`${styles.copyright}`} >
                    <a 
                    href='#'
                    onClick={e => onClickMostrarSala(6)} >Créditos</a>
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;