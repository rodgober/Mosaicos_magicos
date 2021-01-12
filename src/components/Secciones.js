import React, { useContext } from 'react';
import salaContext from '../context/salas/salaContext';
import styles from './Secciones.module.css';
import styled from '@emotion/styled';
import { salaMosUp, salaMosOver, salaMosDown, salaMurUp, salaMurOver, salaMurDown, salaCollUp, salaCollOver, salaCollDown } from '../types/imgbotones';

const ImgSecciones = styled.img`
    cursor:pointer;
`;

const Secciones = ({btnMosaicos, btnMurales, btnCollages, btnProgramacion}) => {
    btnMosaicos = React.createRef();
    btnMurales = React.createRef();
    btnCollages = React.createRef();

    const imgList = [salaMosUp, salaMosOver, salaMosDown, salaMurUp, salaMurOver, salaMurDown, salaCollUp, salaCollOver, salaCollDown];
    const salaContexto = useContext(salaContext);
    const { mostrarSala, sala } = salaContexto;

    const onClickMostrarSala = (valor) => {
        mostrarSala(valor);
    }

    return(
        <aside className={`${styles.menu_izq}`}>
                <button className={`${styles.btnSalas}`}>
                    <ImgSecciones 
                        id="1"
                        key="1"
                        src={(sala === 1)? imgList[2].default : imgList[0].default}
                        onClick={e => onClickMostrarSala(1)}
                        onMouseOver={e => (e.currentTarget.src = imgList[2].default)}
                        onMouseLeave= {(sala === 1)? (e => (e.currentTarget.src = imgList[2].default)): e => (e.currentTarget.src = imgList[0].default)}
                        ref={btnMosaicos}
                        alt= "Sala de Mosaicos"
             
                    />
                    <div className={`${styles.txtBtnSala}`}
                        onClick={e => onClickMostrarSala(1)}
                    >Sala de mosaicos</div>
                </button>
                
                <button className={`${styles.btnSalas}`}>
                    <ImgSecciones 
                        id="2"
                        key="2"
                        src={(sala === 2)? imgList[5].default : imgList[3].default}
                        onClick={e => onClickMostrarSala(2)}
                        onMouseOver={e => (e.currentTarget.src = imgList[5].default)}
                        onMouseLeave= {(sala === 2)? (e => (e.currentTarget.src = imgList[5].default)): e => (e.currentTarget.src = imgList[3].default)}
                        ref={btnMurales}
                        alt="Sala de murales"
                    />
                    <div className={`${styles.txtBtnSala}`}
                        onClick={e => onClickMostrarSala(2)}
                    >Sala de murales</div>
                </button>

                <button className={`${styles.btnSalas}`}>
                    <ImgSecciones 
                        id="3"
                        key="3"
                        src={(sala === 3)? imgList[8].default : imgList[6].default}
                        onClick={e => onClickMostrarSala(3)}
                        onMouseOver={e => (e.currentTarget.src = imgList[8].default)}
                        onMouseLeave= {(sala === 3)? (e => (e.currentTarget.src = imgList[8].default)): e => (e.currentTarget.src = imgList[6].default)}
                        ref={btnCollages}
                        alt="Sala de collages"
                    />
                    <div className={`${styles.txtBtnSala}`}
                        onClick={e => onClickMostrarSala(3)}
                    >Sala de collages</div>
                </button>

                <button className={`${styles.btnSalas}`}>
                    <ImgSecciones 
                        id="1"
                        key="1"
                        src={(sala === 4)? imgList[2].default : imgList[0].default}
                        onClick={e => onClickMostrarSala(4)}
                        onMouseOver={e => (e.currentTarget.src = imgList[2].default)}
                        onMouseLeave= {(sala === 4)? (e => (e.currentTarget.src = imgList[2].default)): e => (e.currentTarget.src = imgList[0].default)}
                        ref={btnProgramacion}
                        alt="Sala de programacion"
                    />
                    <div className={`${styles.txtBtnSala}`}
                        onClick={e => onClickMostrarSala(4)}
                    >Programación</div>
                </button>
        </aside>
    )
}
 
export default Secciones;