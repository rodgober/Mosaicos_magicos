import React, { useContext } from 'react';
import Player from './Player';
import salaContext from '../context/salas/salaContext';
import styles from './Header.module.css';
const logo = require('./images/LogoMM.png');
const musica = require('./audio/pueblo.mp3');

const Header = () => {
    const handleChange = e => {
        
    }

    const salaContexto = useContext(salaContext);
    const { mostrarSala, sala } = salaContexto;

    const onClickMostrarSala = (valor) => {
        mostrarSala(valor);
    }

    return ( 
        <header className={`${styles.header}`}>
           <div className={`${styles.header_contenedor}`}>
                    <div className={`${styles.logo}`}>
                        <img
                            src={logo.default}
                            onClick={handleChange}
                            alt="Mosaicos mágicos"
                        />
                    </div>

                    <nav className={`${styles.menu}`}>
                        <button
                            type="button"
                            onClick={e => onClickMostrarSala(1)}
                            className={(1 === sala) ? `${styles.presionado}` : `${styles.myButton}`}
                            disabled={(sala === 1)}
                        >Mosaicos  
                        </button>
                        <button
                            type="button"
                            onClick={e => onClickMostrarSala(2)}
                            className={(2 === sala)?`${styles.presionado}`: `${styles.myButton}`}
                            disabled={(sala === 2)}
                        >Murales  
                        </button>
                        <button
                            type="button"
                            onClick={e => onClickMostrarSala(3)}
                            className={(3 === sala)?`${styles.presionado}`: `${styles.myButton}`}
                            disabled={(sala === 3)}
                        >Collages  
                        </button>
                        <button
                            type="button"
                            onClick={e => onClickMostrarSala(4)}
                            className={(4 === sala)?`${styles.presionado}`: `${styles.myButton}`}
                            disabled={(sala === 4)}
                        >Programación  
                        </button>
                    </nav>
                    <div className={`${styles.configuracion}`}>
                        <Player
                            url={musica.default}
                        ></Player>
                    </div>                    
            </div> 
        </header>
     );
}
 
export default Header;