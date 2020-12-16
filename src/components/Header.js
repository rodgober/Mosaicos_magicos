import React, { useContext } from 'react';
import Player from './Player';
import salaContext from '../context/salas/salaContext';
import styles from './Header.module.css';
const logo = require('./images/LogoMM.png');

const Header = () => {
    const handleChange = e => {
        console.log('Seleciono configuracion');
    }

    const salaContexto = useContext(salaContext);
    const { mostrarSala, sala } = salaContexto;

    const onClickMostrarSala = (valor) => {
        console.log('cambio de sala: ', valor)
        mostrarSala(valor);
    }
    return ( 
        <header>
            <img src={logo} />
            <img
                            src={logo}
                            onClick={handleChange}
                            alt="Mosaicos magicos"
                        />
        </header>
       /* <header className={`${styles.header}`}>
           <div className={`${styles.header_contenedor}`}>
                    <div className={`${styles.logo}`}>
                        <img
                           // className={`${styles.img_logo}`}
                            src={logo}
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
                    </nav>
                    <div className={`${styles.configuracion}`}>
                        <Player
                            url="http://glacademy.com.mx/pueblo.mp3"
                        ></Player>
                    </div>                    
            </div> 
        </header>*/
     );
}
 
export default Header;