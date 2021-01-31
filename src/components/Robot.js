import React, { Fragment, useState, useContext, useEffect } from 'react';
import programaContext from '../context/programa/programaContext';
import salaContext from '../context/salas/salaContext'


import styles from './Robot.module.css';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AndroidIcon from '@material-ui/icons/Android';
import {useSpring, animated, interpolate} from 'react-spring'

const Robot = React.forwardRef((props, ref) => {
    const instruccionesContext = useContext(programaContext);
    const { xx, yy, direccion } = instruccionesContext;

    const salaContexto = useContext(salaContext);
    const { alto, largo } = salaContexto; //alto y largo del mosaico

    // 1 = derecha, 2=Abajo, 3=Izquierda, 4=arriba
   // const [direccion, setDireccion] = useState(1); 


   /*La formula para obtener las coordenadas X y Y= 
        xx= posicion en casillas del robot en coordenada x 
        yy= posicion en casillas del robot en coordenada y
        en un inicio debe estar en el [1,1] pero se le resta 1 porque en el mural debe estar en el [0,0]
         40*(xx-1) = es el tamaño del mosaico (40) multiplicado por la casilla donde debe estar
         +(xx-1) = cada casilla que avanza el robot se le debe incrementar 1 pixel por la linea blanca divisoria del mural
         en Y además se le suman 50 pixeles que son los de los controles manuales
   */
    const {xyz} = useSpring({
        from: {xyz: [0, 0, 0]},
        xyz: [(40*(xx-1))+(xx-1), (40*(yy-1))+(yy-1) + 50, 0], config: { duration: 500 }
      });

    useEffect(e => {
        const canvasRef = ref;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, largo, alto);  //Limpia el mosaico de arriba para crear un nuevo mosaic
        ctx.fillStyle = 'LightGray'; //Estblece color de relleno blanco
        ctx.strokeStyle = 'white'; //Estblece color de relleno blanco
        ctx.fillRect(0, 0, largo, alto);
        ctx.strokeStyle = 'red';

        ctx.beginPath(); 
        // Staring point (10,45)
        ctx.moveTo(0,0);
        ctx.lineTo(largo, alto);
        ctx.stroke();
        ctx.moveTo(largo,0);
        ctx.lineTo(0, alto);
        ctx.stroke();
        ctx.rect(0,0,largo, alto );
        ctx.stroke();
        // eslint-disable-next-line
    }, []);


    return ( 
        <Fragment>
            <div className={`${styles.robot}`}  >
                <animated.div 
                    style={{
                        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`)
                    }}
                >
                    <AndroidIcon
                        className={`${styles.color}`}
                        style={{ minHeight: 1, fontSize: 35  }}
                        viewBox='-2 0 25 10'
                    ></AndroidIcon>
                    <div className={`${styles.divmosaicoRobot}`}>
                        <canvas
                            width='40px'
                            height='40px'
                            className={`${styles.canvas_mosaico_robot}`}
                            ref={ref}
                        />
                    </div>
                    {(1 === direccion)?(
                        <ArrowRightIcon
                            className={`${styles.color}`}
                            style={{ minHeight: 15, minWidth:15, fontSize: 35   }}
                            viewBox='5 10 11 20'
                        ></ArrowRightIcon>
                        )
                        :null}

                    {(2 === direccion)?(
                        <ArrowDropDownIcon
                            className={`${styles.color}`}
                            style={{ fontSize: 35   }}
                            viewBox='5 10 11 20'
                        ></ArrowDropDownIcon>
                        
                    )
                    :null}
                    {(3 === direccion)?(
                        <ArrowLeftIcon
                            className={`${styles.color}`}
                            style={{ fontSize: 35   }}
                            viewBox='5 10 11 20'
                        ></ArrowLeftIcon>
                        
                        )
                        :null}
                    {(4 === direccion)?(
                        <ArrowDropUpIcon
                            className={`${styles.color}`}
                            style={{ fontSize: 35   }}
                            
                        ></ArrowDropUpIcon>
                        
                        )
                        :null}
                </animated.div>
            </div>
        </Fragment>
     );
});
 
export default Robot;