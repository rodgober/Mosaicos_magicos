import React, { useContext } from 'react';
import salaContext from '../context/salas/salaContext';
import styles from './Secciones.module.css';
import styled from '@emotion/styled';
import { salaMosUp, salaMosOver, salaMosDown, salaMurUp, salaMurOver, salaMurDown, salaCollUp, salaCollOver, salaCollDown } from '../types/imgbotones';

const BotonSalas = styled.button`
    position:relative;
    border:none;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 10px;
    background-color: rgb(206, 215, 222);
`;

const ImgSecciones = styled.img`
    cursor:pointer;
`;

const Etiqueta = styled.div`
    position:absolute;
    top:24px;
    left:60px;
    cursor:pointer;
`;

const Secciones = ({btnMosaicos, btnMurales, btnCollages, btnProgramacion}) => {
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
                    <ImgSecciones 
                        id="1"
                        key="1"
                        src={imgList[0].default}
                        onClick={e => onClickMostrarSala(1)}
                        onMouseOver={e => (e.currentTarget.src = imgList[2].default)}
                        onMouseLeave={e => (e.currentTarget.src = imgList[0].default)}
                        ref={btnMosaicos}
                        alt="Sala de mosaicos"
                    />
                    <Etiqueta 
                        onClick={e => onClickMostrarSala(1)}
                    >Sala de mosaicos</Etiqueta>
                </BotonSalas>
                
                <BotonSalas>
                    <ImgSecciones 
                        id="2"
                        key="2"
                        src={imgList[3].default}
                        onClick={e => onClickMostrarSala(2)}
                        onMouseOver={e => (e.currentTarget.src = imgList[5].default)}
                        onMouseLeave={e => (e.currentTarget.src = imgList[3].default)}
                        ref={btnMurales}
                        alt="Sala de murales"
                    />
                    <Etiqueta 
                        onClick={e => onClickMostrarSala(2)}
                    >Sala de murales</Etiqueta>
                </BotonSalas>

                <BotonSalas>
                    <ImgSecciones 
                        id="3"
                        key="3"
                        src={imgList[6].default}
                        onClick={e => onClickMostrarSala(3)}
                        onMouseOver={e => (e.currentTarget.src = imgList[8].default)}
                        onMouseLeave={e => (e.currentTarget.src = imgList[6].default)}
                        ref={btnCollages}
                        alt="Sala de collages"
                    />
                    <Etiqueta 
                        onClick={e => onClickMostrarSala(3)}
                    >Sala de collages</Etiqueta>
                </BotonSalas>

                <BotonSalas>
                    <ImgSecciones 
                        id="1"
                        key="1"
                        src={imgList[0].default}
                        onClick={e => onClickMostrarSala(4)}
                        onMouseOver={e => (e.currentTarget.src = imgList[2].default)}
                        onMouseLeave={e => (e.currentTarget.src = imgList[0].default)}
                        ref={btnProgramacion}
                        alt="Sala de programacion"
                    />
                    <Etiqueta 
                        onClick={e => onClickMostrarSala(4)}
                    >Programación</Etiqueta>
                </BotonSalas>
        </aside>
    )
}
 
export default Secciones;