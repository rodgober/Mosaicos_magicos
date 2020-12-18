import React,  { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {btnDis, cir1Up, cir1Over, cir1Dis, cir2Up, cir2Over, cir2Dis, cir3Up, cir3Over, cir3Dis, cir4Up, cir4Over, cir4Dis, cir5Up, cir5Over, cir5Dis, cir6Up, cir6Over, cir6Dis, cir7Up, cir7Over, cir7Dis, cir8Up, cir8Over, cir8Dis, cir9Up, cir9Over, cir9Dis, cir10Up, cir10Over, cir10Dis,
    cua1Up, cua1Over, cua1Dis, cua2Up, cua2Over, cua2Dis, cua3Up, cua3Over, cua3Dis, cua4Up, cua4Over, cua4Dis, cua5Up, cua5Over, cua5Dis, cua6Up, cua6Over, cua6Dis, cua7Up, cua7Over, cua7Dis, cua8Up, cua8Over, cua8Dis, cua9Up, cua9Over, cua9Dis, cua10Up, cua10Over, cua10Dis,
    tri1Up, tri1Over, tri1Dis, tri2Up, tri2Over, tri2Dis, tri3Up, tri3Over, tri3Dis, tri4Up, tri4Over, tri4Dis, tri5Up, tri5Over, tri5Dis, tri6Up, tri6Over, tri6Dis, tri7Up, tri7Over, tri7Dis, tri8Up, tri8Over, tri8Dis, tri9Up, tri9Over, tri9Dis, tri10Up, tri10Over, tri10Dis,
    rom1Up, rom1Over, rom1Dis, rom2Up, rom2Over, rom2Dis, 
    hex1Up, hex1Over, hex1Dis, hex2Up, hex2Over, hex2Dis,
    lin1Up, lin1Over, lin1Dis, lin2Up, lin2Over, lin2Dis, lin3Up, lin3Over, lin3Dis, lin4Up, lin4Over, lin4Dis
 } from '../types/imgbotones';


const ContenedorVariantes = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

`;
const BotonVariantes = styled.button`
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
const Variantes = ({figura, variante, setVariante, btnVar1,btnVar2, btnVar3, btnVar4, btnVar5, btnVar6, btnVar7, btnVar8, btnVar9, btnVar10}) => {

    btnVar1 = React.createRef();
    btnVar2 = React.createRef();
    btnVar3 = React.createRef();
    btnVar4 = React.createRef();
    btnVar5 = React.createRef();
    btnVar6 = React.createRef();
    btnVar7 = React.createRef();
    btnVar8 = React.createRef();
    btnVar9 = React.createRef();
    btnVar10 = React.createRef();    

    const imgListV1 = [btnDis, cir1Up, cir1Over, cir1Dis, cua1Up, cua1Over, cua1Dis, tri1Up, tri1Over, tri1Dis, rom1Up, rom1Over, rom1Dis, hex1Up, hex1Over, hex1Dis, lin1Up, lin1Over, lin1Dis];
    const imgListV2 = [btnDis, cir2Up, cir2Over, cir2Dis, cua2Up, cua2Over, cua2Dis, tri2Up, tri2Over, tri2Dis, rom2Up, rom2Over, rom2Dis, hex2Up, hex2Over, hex2Dis, lin2Up, lin2Over, lin2Dis];
    const imgListV3 = [btnDis, cir3Up, cir3Over, cir3Dis, cua3Up, cua3Over, cua3Dis, tri3Up, tri3Over, tri3Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, lin3Up, lin3Over, lin3Dis];
    const imgListV4 = [btnDis, cir4Up, cir4Over, cir4Dis, cua4Up, cua4Over, cua4Dis, tri4Up, tri4Over, tri4Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, lin4Up, lin4Over, lin4Dis];
    const imgListV5 = [btnDis, cir5Up, cir5Over, cir5Dis, cua5Up, cua5Over, cua5Dis, tri5Up, tri5Over, tri5Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis];
    const imgListV6 = [btnDis, cir6Up, cir6Over, cir6Dis, cua6Up, cua6Over, cua6Dis, tri6Up, tri6Over, tri6Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis];
    const imgListV7 = [btnDis, cir7Up, cir7Over, cir7Dis, cua7Up, cua7Over, cua7Dis, tri7Up, tri7Over, tri7Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis];
    const imgListV8 = [btnDis, cir8Up, cir8Over, cir8Dis, cua8Up, cua8Over, cua8Dis, tri8Up, tri8Over, tri8Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis];
    const imgListV9 = [btnDis, cir9Up, cir9Over, cir9Dis, cua9Up, cua9Over, cua9Dis, tri9Up, tri9Over, tri9Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis];
    const imgListV10 = [btnDis, cir10Up, cir10Over, cir10Dis, cua10Up, cua10Over, cua10Dis, tri10Up, tri10Over, tri10Dis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis, btnDis];
    const [inVari1Up, setinVari1Up] = useState(0);
    const [inVari1Over, setinVari1Over] = useState(0);
    const [inVari2Up, setinVari2Up] = useState(0);
    const [inVari2Over, setinVari2Over] = useState(0);
    const [inVari3Up, setinVari3Up] = useState(0);
    const [inVari3Over, setinVari3Over] = useState(0);
    const [inVari4Up, setinVari4Up] = useState(0);
    const [inVari4Over, setinVari4Over] = useState(0);
    const [inVari5Up, setinVari5Up] = useState(0);
    const [inVari5Over, setinVari5Over] = useState(0);
    const [inVari6Up, setinVari6Up] = useState(0);
    const [inVari6Over, setinVari6Over] = useState(0);
    const [inVari7Up, setinVari7Up] = useState(0);
    const [inVari7Over, setinVari7Over] = useState(0);
    const [inVari8Up, setinVari8Up] = useState(0);
    const [inVari8Over, setinVari8Over] = useState(0);
    const [inVari9Up, setinVari9Up] = useState(0);
    const [inVari9Over, setinVari9Over] = useState(0);
    const [inVari10Up, setinVari10Up] = useState(0);
    const [inVari10Over, setinVari10Over] = useState(0);


    //Funcion que pone en el STATE el ID de la variante presionada
    const handleChange = e => {
        if(variante === 0){
            setVariante(Number(e.target.id));
        }
    }    

    useEffect(() => {
        if (figura > 0){
            setinVari1Up((figura * 3) - 2);
            setinVari1Over((figura * 3) - 2 + 1);
            setinVari2Up((figura * 3) - 2);
            setinVari2Over((figura * 3) - 2 + 1);
            setinVari3Up((figura * 3) - 2);
            setinVari3Over((figura * 3) - 2 + 1);
            setinVari4Up((figura * 3) - 2);
            setinVari4Over((figura * 3) - 2 + 1);
            setinVari5Up((figura * 3) - 2);
            setinVari5Over((figura * 3) - 2 + 1);
            setinVari6Up((figura * 3) - 2);
            setinVari6Over((figura * 3) - 2 + 1);
            setinVari7Up((figura * 3) - 2);
            setinVari7Over((figura * 3) - 2 + 1);
            setinVari8Up((figura * 3) - 2);
            setinVari8Over((figura * 3) - 2 + 1);
            setinVari9Up((figura * 3) - 2);
            setinVari9Over((figura * 3) - 2 + 1);
            setinVari10Up((figura * 3) - 2);
            setinVari10Over((figura * 3) - 2 + 1);
            btnVar1.current.src = imgListV1[(figura * 3) - 2].default;
            btnVar2.current.src = imgListV2[(figura * 3) - 2].default;
            btnVar3.current.src = imgListV3[(figura * 3) - 2].default;
            btnVar4.current.src = imgListV4[(figura * 3) - 2].default;
            btnVar5.current.src = imgListV5[(figura * 3) - 2].default;
            btnVar6.current.src = imgListV6[(figura * 3) - 2].default;
            btnVar7.current.src = imgListV7[(figura * 3) - 2].default;
            btnVar8.current.src = imgListV8[(figura * 3) - 2].default;
            btnVar9.current.src = imgListV9[(figura * 3) - 2].default;
            btnVar10.current.src = imgListV10[(figura * 3) - 2].default;
        }
    }, [figura]); 

    useEffect(() => {
        if (variante > 0){
            deshabilitarVariantes(variante);
        }else{
            iniciarVariantes();
        }
    }, [variante]);
    
    function iniciarVariantes(){
        setinVari1Up(0);
        setinVari1Over(0);
        setinVari2Up(0);
        setinVari2Over(0);
        setinVari3Up(0);
        setinVari3Over(0);
        setinVari4Up(0);
        setinVari4Over(0);
        setinVari5Up(0);
        setinVari5Over(0);
        setinVari6Up(0);
        setinVari6Over(0);
        setinVari7Up(0);
        setinVari7Over(0);
        setinVari8Up(0);
        setinVari8Over(0);
        setinVari9Up(0);
        setinVari9Over(0);
        setinVari10Up(0);
        setinVari10Over(0);
        
        btnVar1.current.src = imgListV1[0].default;
        btnVar2.current.src = imgListV2[0].default;
        btnVar3.current.src = imgListV3[0].default;
        btnVar4.current.src = imgListV4[0].default;
        btnVar5.current.src = imgListV5[0].default;
        btnVar6.current.src = imgListV6[0].default;
        btnVar7.current.src = imgListV7[0].default;
        btnVar8.current.src = imgListV8[0].default;
        btnVar9.current.src = imgListV9[0].default;
        btnVar10.current.src = imgListV10[0].default;
    }

    function deshabilitarVariantes(variante){
        btnVar1.current.src = imgListV1[(figura * 3)].default;
        btnVar2.current.src = imgListV2[(figura * 3)].default;
        btnVar3.current.src = imgListV3[(figura * 3)].default;
        btnVar4.current.src = imgListV4[(figura * 3)].default;
        btnVar5.current.src = imgListV5[(figura * 3)].default;
        btnVar6.current.src = imgListV6[(figura * 3)].default;
        btnVar7.current.src = imgListV7[(figura * 3)].default;
        btnVar8.current.src = imgListV8[(figura * 3)].default;
        btnVar9.current.src = imgListV9[(figura * 3)].default;
        btnVar10.current.src = imgListV10[(figura * 3)].default;
        setinVari1Up(figura * 3);
        setinVari1Over(figura * 3);
        setinVari2Up(figura * 3);
        setinVari2Over(figura * 3);
        setinVari3Up(figura * 3);
        setinVari3Over(figura * 3);
        setinVari4Up(figura * 3);
        setinVari4Over(figura * 3);
        setinVari5Up(figura * 3);
        setinVari5Over(figura * 3);
        setinVari6Up(figura * 3);
        setinVari6Over(figura * 3);
        setinVari7Up(figura * 3);
        setinVari7Over(figura * 3);
        setinVari8Up(figura * 3);
        setinVari8Over(figura * 3);
        setinVari9Up(figura * 3);
        setinVari9Over(figura * 3);
        setinVari10Up(figura * 3);
        setinVari10Over(figura * 3);
        switch (variante) {
            case 11:
                btnVar1.current.src = imgListV1[(figura * 3) - 2].default;
                setinVari1Up((figura * 3) - 2)
                setinVari1Over((figura * 3) - 2)         
                break;
            case 12:
                btnVar2.current.src = imgListV2[(figura * 3) - 2].default;
                setinVari2Up((figura * 3) - 2);
                setinVari2Over((figura * 3) - 2);           
                break;
            case 13:
                btnVar3.current.src = imgListV3[(figura * 3) - 2].default;
                setinVari3Up((figura * 3) - 2);
                setinVari3Over((figura * 3) - 2);          
                break;
            case 14:
                btnVar4.current.src = imgListV4[(figura * 3) - 2].default;
                setinVari4Up((figura * 3) - 2);
                setinVari4Over((figura * 3) - 2);             
                break;
            case 15:
                btnVar5.current.src = imgListV5[(figura * 3) - 2].default;
                setinVari5Up((figura * 3) - 2);
                setinVari5Over((figura * 3) - 2);             
                break;
            case 16:
                btnVar6.current.src = imgListV6[(figura * 3) - 2].default;
                setinVari6Up((figura * 3) - 2);
                setinVari6Over((figura * 3) - 2);              
                break;
            case 17:
                btnVar7.current.src = imgListV7[(figura * 3) - 2].default;
                setinVari7Up((figura * 3) - 2);
                setinVari7Over((figura * 3) - 2);              
                break;
            case 18:
                btnVar8.current.src = imgListV8[(figura * 3) - 2].default;
                setinVari8Up((figura * 3) - 2);
                setinVari8Over((figura * 3) - 2);          
                break;
            case 19:
                btnVar9.current.src = imgListV9[(figura * 3) - 2].default;
                setinVari9Up((figura * 3) - 2);
                setinVari9Over((figura * 3) - 2);            
                break;
            case 20:
                btnVar10.current.src = imgListV10[(figura * 3) - 2].default;
                setinVari10Up((figura * 3) - 2);
                setinVari10Over((figura * 3) - 2);          
                break;
            default:
                btnVar1.current.src = imgListV1[(figura * 3) - 2].default;
                setinVari1Up((figura * 3) - 2);
                setinVari1Over((figura * 3) - 2);              
                break;
        }
    }

    return ( 
        <ContenedorVariantes>
            <BotonVariantes>
                <ImgBotones 
                    id="11"
                    key="11"
                    src={imgListV1[inVari1Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV1[inVari1Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV1[inVari1Up].default)}
                    ref={btnVar1}
                    alt="Variente 1"
                />                
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="12"
                    key="12"
                    src={imgListV2[inVari2Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV2[inVari2Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV2[inVari2Up].default)}
                    ref={btnVar2}
                    alt="Variente 2"
                />  
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="13"
                    key="13"
                    src={imgListV3[inVari3Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV3[inVari3Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV3[inVari3Up].default)}
                    ref={btnVar3}
                    alt="Variente 3"
                />
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="14"
                    key="14"
                    src={imgListV4[inVari4Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV4[inVari4Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV4[inVari4Up].default)}
                    ref={btnVar4}
                    alt="Variente 4"
                />                 
            </BotonVariantes>


            <BotonVariantes>
                <ImgBotones 
                    id="15"
                    key="15"
                    src={imgListV5[inVari5Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV5[inVari5Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV5[inVari5Up].default)}
                    ref={btnVar5}
                    alt="Variente 5"
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="16"
                    key="16"
                    src={imgListV6[inVari6Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV6[inVari6Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV6[inVari6Up].default)}
                    ref={btnVar6}
                    alt="Variente 6"
                />                 
            </BotonVariantes>   

            <BotonVariantes>
                <ImgBotones 
                    id="17"
                    key="17"
                    src={imgListV7[inVari7Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV7[inVari7Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV7[inVari7Up].default)}
                    ref={btnVar7}
                    alt="Variente 7"
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="18"
                    key="18"
                    src={imgListV8[inVari8Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV8[inVari8Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV8[inVari8Up].default)}
                    ref={btnVar8}
                    alt="Variente 8"
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="19"
                    key="19"
                    src={imgListV9[inVari9Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV9[inVari9Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV9[inVari9Up].default)}
                    ref={btnVar9}
                    alt="Variente 9"
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <ImgBotones 
                    id="20"
                    key="20"
                    src={imgListV10[inVari10Up].default}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV10[inVari10Over].default)}
                    onMouseLeave={e => (e.currentTarget.src = imgListV10[inVari10Up].default)}
                    ref={btnVar10}
                    alt="Variente 10"
                />  
            </BotonVariantes>

        </ContenedorVariantes>
     );
}
 
export default Variantes;