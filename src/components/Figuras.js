import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

const circUp = require('./images/botones/figuras/btnCirculoUp.jpg');
const circOver = require('./images/botones/figuras/btnCirculoOver.jpg');
const circDis = require('./images/botones/figuras/btnCirculoDis.jpg');
const cuadUp = require('./images/botones/figuras/btnCuaUp.jpg');
const cuadOver = require('./images/botones/figuras/btnCuaOver.jpg');
const cuadDis = require('./images/botones/figuras/btnCuaDis.jpg');
const triaUp = require('./images/botones/figuras/btnTrianUp.jpg');
const triaOver = require('./images/botones/figuras/btnTrianOver.jpg');
const triaDis = require('./images/botones/figuras/btnTrianDis.jpg');
const romboUp = require('./images/botones/figuras/btnRomboUp.jpg');
const romboOver = require('./images/botones/figuras/btnRomboOver.jpg');
const romboDis = require('./images/botones/figuras/btnRomboDis.jpg');
const hexaUp = require('./images/botones/figuras/btnHexaUp.jpg');
const hexaOver = require('./images/botones/figuras/btnHexaOver.jpg');
const hexaDis = require('./images/botones/figuras/btnHexaDis.jpg');
const lineaUp = require('./images/botones/figuras/btnLineaUp.jpg');
const lineaOver = require('./images/botones/figuras/btnLineaOver.jpg');
const lineaDis = require('./images/botones/figuras/btnLineaDis.jpg');
const btnDis = require('./images/botones/figuras/btnDis.jpg');


const ContenedorFiguras = styled.div`
    display: flex;
    flex-flow: row wrap;
`;
const BotonFiguras = styled.button`
    cursor:pointer;
    border:none;
    flex-grow: 1;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 0px;
`;

const Figuras = ({figura, setFigura, btnCirc, btnCuad, btnTria, btnRombo, btnHexa, btnLinea}) => {

    btnCirc = React.createRef();
    btnCuad = React.createRef();
    btnTria = React.createRef();
    btnRombo = React.createRef();
    btnHexa = React.createRef();
    btnLinea = React.createRef();

    const imgList = [circUp, circOver, circDis, cuadUp, cuadOver, cuadDis, triaUp, triaOver, triaDis, romboUp, romboOver, romboDis, hexaUp, hexaOver, hexaDis, lineaUp, lineaOver, lineaDis];
    let inCircUp = 0;
    let inCircOver = 1;
    let inCuadUp = 3;
    let inCuadOver = 4;
    let inTriaUp = 6;
    let inTriaOver = 7;
    let inRomboUp = 9;
    let inRomboOver = 10;
    let inHexadUp = 12;
    let inHexadOver = 13;
    let inLineaUp = 15;
    let inLineaOver = 16;
    console.log('inicia las imagenes de las figuras');

//Cuando ya seleccionó una figura, cambia las imagenes y deshabilita los botones
    useEffect(() => {
        if (figura === 0){
            inCircUp = 0;
            inCircOver = 1;
            inCuadUp = 3;
            inCuadOver = 4;
            inTriaUp = 6;
            inTriaOver = 7;
            inRomboUp = 9;
            inRomboOver = 10;
            inHexadUp = 12;
            inHexadOver = 13;
            inLineaUp = 15;
            inLineaOver = 16;
            btnCirc.current.src = circUp;
            btnCuad.current.src = cuadUp;
            btnTria.current.src = triaUp;
            btnRombo.current.src = romboUp;
            btnHexa.current.src = hexaUp;
            btnLinea.current.src = lineaUp;             
        }else{
            inCircUp = 2;
            inCircOver = 2;
            inCuadUp = 5;
            inCuadOver = 5;
            inTriaUp = 8;
            inTriaOver = 8;
            inRomboUp = 11;
            inRomboOver = 11;
            inHexadUp = 14;
            inHexadOver = 14;
            inLineaUp = 17;
            inLineaOver = 17;
            btnCirc.current.src = circDis;
            btnCuad.current.src = cuadDis;
            btnTria.current.src = triaDis;
            btnRombo.current.src = romboDis;
            btnHexa.current.src = hexaDis;
            btnLinea.current.src = lineaDis;
            switch (figura) {
                case 1:
                    btnCirc.current.src = circUp;
                    inCircUp = 0;
                    inCircOver = 1;
                    break;
                case 2:
                    inCuadUp = 3;
                    inCuadOver = 4;
                    btnCuad.current.src = cuadUp;
                    break;
                case 3:
                    btnTria.current.src = triaUp;
                    inTriaUp = 6;
                    inTriaOver = 7;
                    break;
                case 4:
                    btnRombo.current.src = romboUp;
                    inRomboUp = 9;
                    inRomboOver = 10;
                    break;
                case 5:
                    btnHexa.current.src = hexaUp;
                    inHexadUp = 12;
                    inHexadOver = 13;
                    break;
                case 6:
                    btnLinea.current.src = lineaUp;
                    inLineaUp = 15;
                    inLineaOver = 16;
                    break;                    
                default:
                    btnCirc.current.src = circUp;
                    inCircUp = 0;
                    inCircOver = 1;
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


    return ( 
        <ContenedorFiguras>
            <BotonFiguras
            >
                <img 
                    id="1"
                    key="1"
                    src={imgList[inCircUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inCircOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inCircUp])}
                    ref={btnCirc}
                />
            </BotonFiguras>

            <BotonFiguras>
                <img 
                    id="2"
                    key="2"
                    src={imgList[inCuadUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inCuadOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inCuadUp])}
                    ref={btnCuad}
                />
            </BotonFiguras>

            <BotonFiguras>
                <img 
                    id="3"
                    key="3"
                    src={imgList[inTriaUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inTriaOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inTriaUp])}
                    ref={btnTria}
                />                
                  </BotonFiguras>

            <BotonFiguras>
                <img 
                    id="4"
                    key="4"
                    src={imgList[inRomboUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inRomboOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inRomboUp])}
                    ref={btnRombo}
                /> 
            </BotonFiguras>

            <BotonFiguras>
                <img 
                    id="5"
                    key="5"
                    src={imgList[inHexadUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inHexadOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inHexadUp])}
                    ref={btnHexa}
                />
            </BotonFiguras>

            <BotonFiguras>
                <img 
                    id="6"
                    key="6"
                    src={imgList[inLineaUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inLineaOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inLineaUp])}
                    ref={btnLinea}
                />
            </BotonFiguras>

            <BotonFiguras
            disabled >
                <img 
                    id="7"
                    key="7"
                    src={btnDis}
                />
            </BotonFiguras>
            <BotonFiguras
            disabled >
                <img 
                    id="8"
                    key="8"
                    src={btnDis}
                />
            </BotonFiguras> 
            <BotonFiguras
            disabled >
                <img 
                    id="9"
                    key="9"
                    src={btnDis}
                />
            </BotonFiguras> 
            <BotonFiguras
            disabled >
                <img 
                    id="10"
                    key="10"
                    src={btnDis}
                />
            </BotonFiguras>               

            
        </ContenedorFiguras>
     );
}
 
export default Figuras;