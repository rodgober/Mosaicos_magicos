import React, { useContext } from 'react';
import salaContext from '../context/salas/salaContext';
import styles from './Secciones.module.css';
import styled from '@emotion/styled';
import { salaMosUp, salaMosOver, salaMosDown, salaMurUp, salaMurOver, salaMurDown, salaCollUp, salaCollOver, salaCollDown } from '../types/imgbotones';

const BotonSalas = styled.button`
    cursor:pointer;
    border:none;
    flex-grow: 1;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 0px;
`;

const Secciones = ({btnMosaicos, btnMurales, btnCollages}) => {
    btnMosaicos = React.createRef();
    btnMurales = React.createRef();
    btnCollages = React.createRef();

    const imgList = [salaMosUp, salaMosOver, salaMosDown, salaMurUp, salaMurOver, salaMurDown, salaCollUp, salaCollOver, salaCollDown];
    const salaContexto = useContext(salaContext);
    const { mostrarSala } = salaContexto;

    const onClickMostrarSala = (valor) => {
        mostrarSala(valor);
    }

    return(
        <aside className={`${styles.menu_izq}`}>
                <BotonSalas>
                    <img 
                        id="1"
                        key="1"
                        src={imgList[0]}
                        onClick={e => onClickMostrarSala(1)}
                        onMouseOver={e => (e.currentTarget.src = imgList[2])}
                        onMouseLeave={e => (e.currentTarget.src = imgList[0])}
                        ref={btnMosaicos}
                        alt="Sala de mosaicos"
                    />
                </BotonSalas>
                
                <BotonSalas>
                    <img 
                        id="2"
                        key="2"
                        src={imgList[3]}
                        onClick={e => onClickMostrarSala(2)}
                        onMouseOver={e => (e.currentTarget.src = imgList[5])}
                        onMouseLeave={e => (e.currentTarget.src = imgList[3])}
                        ref={btnMurales}
                        alt="Sala de murales"
                    />
                </BotonSalas>

                <BotonSalas>
                    <img 
                        id="3"
                        key="3"
                        src={imgList[6]}
                        onClick={e => onClickMostrarSala(3)}
                        onMouseOver={e => (e.currentTarget.src = imgList[8])}
                        onMouseLeave={e => (e.currentTarget.src = imgList[6])}
                        ref={btnCollages}
                        alt="Sala de collages"
                    />
                </BotonSalas>

        </aside>
    )
}
 
export default Secciones;