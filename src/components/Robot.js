import React, { Fragment, useState, useContext } from 'react';
import programaContext from '../context/programa/programaContext';


import styles from './Robot.module.css';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AndroidIcon from '@material-ui/icons/Android';
import {useSpring, animated, interpolate} from 'react-spring'

const Robot = () => {
    const instruccionesContext = useContext(programaContext);
    const { xx, yy, direccion } = instruccionesContext;

    // 1 = derecha, 2=Abajo, 3=Izquierda, 4=arriba
   // const [direccion, setDireccion] = useState(1); 

  //  const [xx, setxx] = useState(0);
  //  const [yy, setyy] = useState(0);
    const {xyz} = useSpring({
        from: {xyz: [0, 0, 0]},
        xyz: [xx, yy, 0], config: { duration: 500 }
      })

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
                        style={{ fontSize: 35   }}
                    ></AndroidIcon>
                    <p>Etiqueta</p>
                    {(1 === direccion)?(
                        <ArrowRightIcon
                            className={`${styles.color}`}
                            style={{ fontSize: 35   }}
                        ></ArrowRightIcon>
                        )
                        :null}

                    {(2 === direccion)?(
                        <ArrowDropDownIcon
                            className={`${styles.color}`}
                            style={{ fontSize: 35   }}
                        ></ArrowDropDownIcon>
                        
                    )
                    :null}
                    {(3 === direccion)?(
                        <ArrowLeftIcon
                            className={`${styles.color}`}
                            style={{ fontSize: 35   }}
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
}
 
export default Robot;