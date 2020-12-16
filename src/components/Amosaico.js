import React, { useContext, Fragment, useEffect } from 'react';
import salaContext from '../context/salas/salaContext'
import styles from './Amosaico.module.css';
import { horno1, horno2, horno3, huecosTrans } from '../types/imgbotones';

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
        

      }, [animacion]);



    return ( 
      <Fragment>
          <div className={`${styles.horno}`} >
                <div 
                    className={animacion ? `${styles.mosaicotran}` : `${styles.mosaicotran1}`}
                >
                    <canvas
                        ref={ref}
                        width={alto}
                        height={largo}
                    />
                </div>

                

                

                    <img className= {`${styles.cfimg}`} 
                        src={fuente1}
                        alt="Horno"
                    />

                    <img className={animacion ? `${styles.cfimg}` : `${styles.ocultar}`} 
                        src={fuente2}
                        alt="Horno encendido"
                                />
                    <img className={animacion ? `${styles.cftop}` : `${styles.ocultar}`} 
                        src={fuente3}
                        alt="Horno encendido"
                                />
                    <img className= {`${styles.huecos}`} 
                        src={huecos}
                        alt="Horno"
                    />
            </div>
      </Fragment>
     );
});
 
export default Amosaico;


    //////
    //PRUEBAS ANIMACIÓN Contador que si funciona//
    /////
    /*
    
    const [count, setCount] = React.useState(0)
    const useAnimationFrame = callback => {
        // Use useRef for mutable variables that we want to persist
        // without triggering a re-render on their change
        const requestRef = React.useRef();
        const previousTimeRef = React.useRef();
        
        const animate = time => {
          if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime)
          }
          previousTimeRef.current = time;
          requestRef.current = requestAnimationFrame(animate);
        }
        
        React.useEffect(() => {
          requestRef.current = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(requestRef.current);
        }, []); // Make sure the effect runs only once
      }

    const [count, setCount] = React.useState(0)
  
    useAnimationFrame(deltaTime => {
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => (prevCount + deltaTime * 0.01) % 100)
    })
*/