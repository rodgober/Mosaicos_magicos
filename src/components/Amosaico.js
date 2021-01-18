import React, { useContext, Fragment, useEffect } from 'react';
import salaContext from '../context/salas/salaContext'
import styles from './Amosaico.module.css';
import { horno1, horno2, horno3, huecosTrans } from '../types/imgbotones';
import PropTypes from 'prop-types';

const fuente1 = horno1; //Horno apagado
const fuente2 = horno2; //Horno encendido
const fuente3 = horno3; //Horno encendido
const huecos = huecosTrans;

const Amosaico = React.forwardRef((props, ref) => {

    let {animacion, setAnimacion} = props;
    const salaContexto = useContext(salaContext);
    const { alto, largo } = salaContexto;

      useEffect(() => {
        if(animacion){
            const interval = setInterval(() => {
                setAnimacion(false);
              }, 5000);
              return () => clearInterval(interval);
        }
      }, [setAnimacion, animacion]);

    return ( 
      <Fragment>
          <div className={`${styles.horno}`} >
                <div 
                    className={animacion ? `${styles.mosaicotran}` : `${styles.ocultar}`}
                >
                    <canvas
                        ref={ref}
                        width={alto}
                        height={largo}
                    />
                </div>
                    <img className= {`${styles.cfimg}`} 
                        src={fuente1.default}
                        alt="Horno"
                    />
                    <img className={animacion ? `${styles.cfimg}` : `${styles.ocultar}`} 
                        src={fuente2.default}
                        alt="Horno encendido"
                                />
                    <img className={animacion ? `${styles.cftop}` : `${styles.ocultar}`} 
                        src={fuente3.default}
                        alt="Horno encendido"
                                />
                    <div className={`${styles.divhuecos}`} >
                        <img className={animacion ? `${styles.huecos}` : `${styles.ocultar}`} 
                            src={huecos.default}
                            alt="Horno"
                        />
                    </div>
            </div>
      </Fragment>
     );
});

Amosaico.protoTypes = {
  animacion: PropTypes.bool.isRequired,
  setAnimacion: PropTypes.func.isRequired,
  ref: PropTypes.node.isRequired 
}
 
export default Amosaico;


