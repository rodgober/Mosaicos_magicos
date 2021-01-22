import React, {useState} from 'react';
import styles from './Galeria.module.css';
import { mural1, mural2, mural3, mural4, mural5, mural6, mural7 } from '../types/imgmuralesgaleria';

const Galeria = () => {
    const imgMurales = [ mural1, mural2, mural3, mural4, mural5, mural6, mural7 ];
    const titulos = [ "El Pez", "Secuencias", "Casa - Simetría", "Ondas complementarias", "Mariposa", "Barco", "Reyes magos" ];

    const [index, setIndex] = useState(0)
    
    return ( 
        <div className={`${styles.div_galeria}`}  >
            <h1 className={`${styles.titulo}`}  >
                {titulos[index]}
            </h1>

            <img 
                className={`${styles.imgMural}`}
                border="0" 
                alt="Mural" 
                src={imgMurales[index].default} 
                 >
            </img>

            <div className={`${styles.div_nav}`}  >
                <button
                    className={`${styles.btn_nav}`}
                    type="button"
                    onClick={e => setIndex(index - 1)}
                    disabled={(index === 0)?true:false }
                > &laquo; Anterior  
                 </button>

                <button
                    className={`${styles.btn_nav}`}
                    type="button"
                    onClick={e => setIndex(index + 1)}
                    disabled={(index >= (imgMurales.length-1))?true:false }
                >Siguiente &raquo;   
                 </button>
            </div>
        </div>
     );
}
 
export default Galeria;