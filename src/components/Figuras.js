import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {btnDis, circUp, circOver, circDis, cuadUp, cuadOver, cuadDis, triaUp, triaOver, triaDis, romboUp, romboOver, romboDis, hexaUp, hexaOver, hexaDis, lineaUp, lineaOver, lineaDis
} from '../types/imgbotones';
import styles from './Figuras.module.css';


const BotonFiguras = styled.button`

    cursor:pointer;
    border:none;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 0px;
    width: 40px;
    height: 40px;

    background-color: Transparent;
    background-repeat:no-repeat;
    overflow: hidden;  

    @media screen and (max-width: 480px) {
        width: 11px;
        height: 11px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 15px;
        height: 15px;
    }
    /* Second breakpoint */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: 25px;
        height: 25px;        
    }
`;

const ImgBotones = styled.img`
    width: 40px;
    height: 40px;

    @media screen and (max-width: 480px) {
        width: 11px;
        height: 11px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 15px;
        height: 15px;
    }
    /* Second breakpoint */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: 25px;
        height: 25px;        
    }  
`;


const Figuras = ({figura, setFigura, btnCirc, btnCuad, btnTria, btnRombo, btnHexa, btnLinea}) => {

    btnCirc = React.createRef();
    btnCuad = React.createRef();
    btnTria = React.createRef();
    btnRombo = React.createRef();
    btnHexa = React.createRef();
    btnLinea = React.createRef();

    const imgList = [circUp, circOver, circDis, cuadUp, cuadOver, cuadDis, triaUp, triaOver, triaDis, romboUp, romboOver, romboDis, hexaUp, hexaOver, hexaDis, lineaUp, lineaOver, lineaDis];
    const [inCircUp, setinCircUp] = useState(0)
    const [inCircOver, setinCircOver] = useState(1)
    const [inCuadUp, setinCuadUp] = useState(3)
    const [inCuadOver, setinCuadOver] = useState(4)
    const [inTriaUp, setinTriaUp] = useState(6)
    const [inTriaOver, setinTriaOver] = useState(7)
    const [inRomboUp, setinRomboUp] = useState(9)
    const [inRomboOver, setinRomboOver] = useState(10)
    const [inHexadUp, setinHexadUp] = useState(12)
    const [inHexadOver, setinHexadOver] = useState(13)
    const [inLineaUp, setinLineaUp] = useState(15)
    const [inLineaOver, setinLineaOver] = useState(16)

//Cuando ya seleccionó una figura, cambia las imagenes y deshabilita los botones
    useEffect(() => {
        if (figura === 0){
            setinCircUp(0);
            setinCircOver(1);
            setinCuadUp(3);
            setinCuadOver(4);
            setinTriaUp(6);
            setinTriaOver(7);
            setinRomboUp(9);
            setinRomboOver(10);
            setinHexadUp(12);
            setinHexadOver(13);
            setinLineaUp(15);
            setinLineaOver(16);
            btnCirc.current.src = circUp.default;
            btnCuad.current.src = cuadUp.default;
            btnTria.current.src = triaUp.default;
            btnRombo.current.src = romboUp.default;
            btnHexa.current.src = hexaUp.default;
            btnLinea.current.src = lineaUp.default;             
        }else{
            setinCircUp(2);
            setinCircOver(2);
            setinCuadUp(5);
            setinCuadOver(5);
            setinTriaUp(8);
            setinTriaOver(8);
            setinRomboUp(11);
            setinRomboOver(11);
            setinHexadUp(14);
            setinHexadOver(14);
            setinLineaUp(17);
            setinLineaOver(17);
            btnCirc.current.src = circDis.default;
            btnCuad.current.src = cuadDis.default;
            btnTria.current.src = triaDis.default;
            btnRombo.current.src = romboDis.default;
            btnHexa.current.src = hexaDis.default;
            btnLinea.current.src = lineaDis.default;
            switch (figura) {
                case 1:
                    btnCirc.current.src = circUp.default;
                    setinCircUp(0);
                    setinCircOver(1);
                    break;
                case 2:
                    setinCuadUp(3);
                    setinCuadOver(4);
                    btnCuad.current.src = cuadUp.default;
                    break;
                case 3:
                    btnTria.current.src = triaUp.default;
                    setinTriaUp(6);
                    setinTriaOver(7);
                    break;
                case 4:
                    btnRombo.current.src = romboUp.default;
                    setinRomboUp(9);
                    setinRomboOver(10);
                    break;
                case 5:
                    btnHexa.current.src = hexaUp.default;
                    setinHexadUp(12);
                    setinHexadOver(13);
                    break;
                case 6:
                    btnLinea.current.src = lineaUp.default;
                    setinLineaUp(15);
                    setinLineaOver(16);
                    break;                    
                default:
                    btnCirc.current.src = circUp.default;
                    setinCircUp(0);
                    setinCircOver(1);
                    break;
            }   
        }
    }, [figura]); 

    //Funcion que pone en el STATE el ID de la figura presionada
    const handleChange = e => {
        if(figura === 0){
            setFigura(Number(e.target.id));
        }
    }
    
    console.log("Ruta de la imagen del boton del círculo up: ", imgList[inCircUp].default);

    return ( 
        <div className={`${styles.cont_figuras}`}>
            <BotonFiguras>
                <ImgBotones
                    id="1"
                    key="1"
                    src={imgList[inCircUp].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inCircOver].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inCircUp].default)}
                    ref={btnCirc}
                />
            </BotonFiguras>

            <BotonFiguras>
                <ImgBotones 
                    id="2"
                    key="2"
                    src={imgList[inCuadUp].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inCuadOver].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inCuadUp].default)}
                    ref={btnCuad}
                />
            </BotonFiguras>

            <BotonFiguras>
                <ImgBotones 
                    id="3"
                    key="3"
                    src={imgList[inTriaUp].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inTriaOver].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inTriaUp].default)}
                    ref={btnTria}
                />                
            </BotonFiguras>

            <BotonFiguras>
                <ImgBotones 
                    id="4"
                    key="4"
                    src={imgList[inRomboUp].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inRomboOver].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inRomboUp].default)}
                    ref={btnRombo}
                /> 
            </BotonFiguras>

            <BotonFiguras>
                <ImgBotones 
                    id="5"
                    key="5"
                    src={imgList[inHexadUp].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inHexadOver].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inHexadUp].default)}
                    ref={btnHexa}
                />
            </BotonFiguras>

            <BotonFiguras>
                <ImgBotones 
                    id="6"
                    key="6"
                    src={imgList[inLineaUp].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inLineaOver].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inLineaUp].default)}
                    ref={btnLinea}
                />
            </BotonFiguras>

            <BotonFiguras
            disabled >
                <ImgBotones 
                    id="7"
                    key="7"
                    src={btnDis.default}
                />
            </BotonFiguras>
            <BotonFiguras
            disabled >
                <ImgBotones 
                    id="8"
                    key="8"
                    src={btnDis.default}
                />
            </BotonFiguras> 
            <BotonFiguras
            disabled >
                <ImgBotones 
                    id="9"
                    key="9"
                    src={btnDis.default}
                />
            </BotonFiguras> 
            <BotonFiguras
            disabled >
                <ImgBotones
                    id="10"
                    key="10"
                    src={btnDis.default}
                />
            </BotonFiguras>               

            
        </div>
     );
}
 
export default Figuras;