import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { rojoUp, rojoOver, amaUp, amaOver, verdeUp, verdeOver, azClaroUp, azClaroOver, azFuerteUp, azFuerteOver, fucUp, fucOver, grisUp, 
    grisOver,narUp,narOver,negUp,negOver,blaUp,blaOver,btnDis } from '../types';



const ContenedorColores = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const BotonColores = styled.button`
    cursor:pointer;
    border:none;
    flex-grow: 1;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 0px;
`;

const Colores = ({figura, variante, color, setColor, pintar, setPintar, setEstampar, setFigura, btnCol1, btnCol2, btnCol3, btnCol4, btnCol5, btnCol6, btnCol7, btnCol8, btnCol9, btnCol10}) => {
    
    btnCol1 = React.createRef();
    btnCol2 = React.createRef();
    btnCol3 = React.createRef();
    btnCol4 = React.createRef();
    btnCol5 = React.createRef();
    btnCol6 = React.createRef();
    btnCol7 = React.createRef();
    btnCol8 = React.createRef();
    btnCol9 = React.createRef();
    btnCol10 = React.createRef();   

    const imgList = [btnDis, rojoUp, rojoOver, amaUp, amaOver, verdeUp, verdeOver, azClaroUp, azClaroOver, azFuerteUp, azFuerteOver, 
        fucUp, fucOver, grisUp, grisOver, narUp, narOver, negUp, negOver, blaUp, blaOver];
        let inRojoUp = 0;
        let inRojoOver = 0;
        let inAmaUp = 0;
        let inAmaOver = 0;
        let inVerdeUp = 0;
        let inVerdeOver = 0;
        let inAzClaroUp = 0;
        let inAzClaroOver = 0;
        let inAzulFUp = 0;
        let inAzulFOver = 0;
        let inFucUp = 0;
        let inFucOver = 0;
        let inGrisUp = 0;
        let inGrisOver = 0;
        let inNarUp = 0;
        let inNarOver = 0;
        let inNegroUp = 0;
        let inNegroOver = 0;
        let inBlanUp = 0;
        let inBlanOver = 0;         

    //Funcion que pone en el STATE el COLOR presionado
    const handleChange = e => {
        //Actualizar el STATE
        setColor(Number(e.target.id));
        setPintar(true);
        setEstampar(true);
    }

    useEffect(() => {
        if(variante > 0){
            habilitarColores();
        }else{
            iniciarColores();
        }
    }, [variante]);

    function habilitarColores(){
        inRojoUp = 1;
        inRojoOver = 2;
        inAmaUp = 3;
        inAmaOver = 4;
        inVerdeUp = 5;
        inVerdeOver = 6;
        inAzClaroUp = 7;
        inAzClaroOver = 8;
        inAzulFUp = 9;
        inAzulFOver = 10;
        inFucUp = 11;
        inFucOver = 12;
        inGrisUp = 13;
        inGrisOver = 14;
        inNarUp = 15;
        inNarOver = 16;
        inNegroUp = 17;
        inNegroOver = 18;
        inBlanUp = 19;
        inBlanOver = 20;   
        btnCol1.current.src = imgList[inRojoUp];
        btnCol2.current.src = imgList[inAmaUp];
        btnCol3.current.src = imgList[inVerdeUp];
        btnCol4.current.src = imgList[inAzClaroUp];
        btnCol5.current.src = imgList[inAzulFUp];
        btnCol6.current.src = imgList[inFucUp];
        btnCol7.current.src = imgList[inGrisUp];
        btnCol8.current.src = imgList[inNarUp];
        btnCol9.current.src = imgList[inNegroUp];
        btnCol10.current.src = imgList[inBlanUp];

    }

    function iniciarColores(){
        inRojoUp = 0;
        inRojoOver = 0;
        inAmaUp = inAmaOver = inVerdeUp = inVerdeOver = inAzClaroUp = inAzClaroOver = inAzulFUp = inAzulFOver = inFucUp = inFucOver = inGrisUp = inGrisOver = inNarUp = inNarOver = inNegroUp =inNegroOver = inBlanUp = inBlanOver = 0;   
        btnCol1.current.src = imgList[0];
        btnCol2.current.src = imgList[0];
        btnCol3.current.src = imgList[0];
        btnCol4.current.src = imgList[0];
        btnCol5.current.src = imgList[0];
        btnCol6.current.src = imgList[0];
        btnCol7.current.src = imgList[0];
        btnCol8.current.src = imgList[0];
        btnCol9.current.src = imgList[0];
        btnCol10.current.src = imgList[0];        

    }

    return ( 
        <ContenedorColores>
            <BotonColores>
                <img 
                    id="21"
                    key="21"
                    src={imgList[inRojoUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inRojoOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inRojoUp])}
                    ref={btnCol1}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="22"
                    key="22"
                    src={imgList[inAmaUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inAmaOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inAmaUp])}
                    ref={btnCol2}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="23"
                    key="23"
                    src={imgList[inVerdeUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inVerdeOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inVerdeUp])}
                    ref={btnCol3}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="24"
                    key="24"
                    src={imgList[inAzClaroUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inAzClaroOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inAzClaroUp])}
                    ref={btnCol4}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="25"
                    key="25"
                    src={imgList[inAzulFUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inAzulFOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inAzulFUp])}
                    ref={btnCol5}
                />
            </BotonColores>


            <BotonColores>
                <img 
                    id="26"
                    key="26"
                    src={imgList[inFucUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inFucOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inFucUp])}
                    ref={btnCol6}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="27"
                    key="27"
                    src={imgList[inGrisUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inGrisOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inGrisUp])}
                    ref={btnCol7}
                />
            </BotonColores>   

            <BotonColores>
                <img 
                    id="28"
                    key="28"
                    src={imgList[inNarUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inNarOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inNarUp])}
                    ref={btnCol8}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="29"
                    key="29"
                    src={imgList[inNegroUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inNegroOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inNegroUp])}
                    ref={btnCol9}
                />
            </BotonColores>

            <BotonColores>
                <img 
                    id="30"
                    key="30"
                    src={imgList[inBlanUp]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgList[inBlanOver])}
                    onMouseLeave={e => (e.currentTarget.src = imgList[inBlanUp])}
                    ref={btnCol10}
                />
            </BotonColores>

        </ContenedorColores>
     );
}
 
export default Colores;