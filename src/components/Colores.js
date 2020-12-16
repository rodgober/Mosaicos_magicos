import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { rojoUp, rojoOver, amaUp, amaOver, verdeUp, verdeOver, azClaroUp, azClaroOver, azFuerteUp, azFuerteOver, fucUp, fucOver, grisUp, 
    grisOver,narUp,narOver,negUp,negOver,blaUp,blaOver,btnDis } from '../types';



const ContenedorColores = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const BotonColores = styled.button`
    cursor:pointer;
    border:none;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 0px;
    width: 40px;
    height: 40px;

    background-color: Transparent;
    background-repeat:no-repeat;
    overflow: hidden;  

    /* fourth breakpoint */
    @media screen and (max-width: 480px) {
        width: 11px;
        height: 11px;
    }
    /* Third breakpoint */
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
    /* fourth breakpoint */
    @media screen and (max-width: 480px) {
        width: 11px;
        height: 11px;
    }
    /* Third breakpoint */
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
        const [inRojoUp, setinRojoUp] = useState(0);
        const [inRojoOver, setinRojoOver] = useState(0);
        const [inAmaUp, setinAmaUp] = useState(0);
        const [inAmaOver, setinAmaOver] = useState(0);
        const [inVerdeUp, setinVerdeUp] = useState(0);
        const [inVerdeOver, setinVerdeOver] = useState(0);
        const [inAzClaroUp, setinAzClaroUp] = useState(0);
        const [inAzClaroOver, setinAzClaroOver] = useState(0);
        const [inAzulFUp, setinAzulFUp] = useState(0);
        const [inAzulFOver, setinAzulFOver] = useState(0);
        const [inFucUp, setinFucUp] = useState(0);
        const [inFucOver, setinFucOver] = useState(0);
        const [inGrisUp, setinGrisUp] = useState(0);
        const [inGrisOver, setinGrisOver] = useState(0);
        const [inNarUp, setinNarUp] = useState(0);
        const [inNarOver, setinNarOver] = useState(0);
        const [inNegroUp, setinNegroUp] = useState(0);
        const [inNegroOver, setinNegroOver] = useState(0);
        const [inBlanUp, setinBlanUp] = useState(0);
        const [inBlanOver, setinBlanOver] = useState(0);   

    //Funcion que pone en el STATE el COLOR presionado
    const handleChange = e => {
        //Actualizar el STATE
        setColor(Number(e.target.id));
        setPintar(true);
        setEstampar(true);
    }

    useEffect(() => {
        if(variante > 0){
            setinRojoUp(1);
            setinRojoOver(2);
            setinAmaUp(3);
            setinAmaOver(4);
            setinVerdeUp(5);
            setinVerdeOver(6);
            setinAzClaroUp(7);
            setinAzClaroOver(8);
            setinAzulFUp(9);
            setinAzulFOver(10);
            setinFucUp(11);
            setinFucOver(12);
            setinGrisUp(13);
            setinGrisOver(14);
            setinNarUp(15);
            setinNarOver(16);
            setinNegroUp(17);
            setinNegroOver(18);
            setinBlanUp(19);
            setinBlanOver(20);   
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
        }else{
            setinRojoUp(0);
            setinRojoOver(0);
            setinAmaUp(0);
            setinAmaOver(0);
            setinVerdeUp(0);
            setinVerdeOver(0);
            setinAzClaroUp(0);
            setinAzClaroOver(0);
            setinAzulFUp(0);
            setinAzulFOver(0);
            setinFucUp(0);
            setinFucOver(0);
            setinGrisUp(0);
            setinGrisOver(0);
            setinNarUp(0);
            setinNarOver(0);
            setinNegroUp(0);
            setinNegroOver(0);
            setinBlanUp(0);
            setinBlanOver(0);  
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
    }, [variante]);

    return ( 
        <ContenedorColores>
            <BotonColores>
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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
                <ImgBotones 
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