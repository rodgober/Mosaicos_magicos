import React,  { useEffect } from 'react';
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
`;
const BotonVariantes = styled.button`
    cursor:pointer;
    border:none;
    flex-grow: 1;
    flex-basis: auto; //1 grow, 2 shrink, 3 basis 
    padding: 0px;
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
    let inVari1Up = 0;
    let inVari1Over = 0;
    let inVari2Up = 0;
    let inVari2Over = 0;
    let inVari3Up = 0;
    let inVari3Over = 0;
    let inVari4Up = 0;
    let inVari4Over = 0;
    let inVari5Up = 0;
    let inVari5Over = 0;
    let inVari6Up = 0;
    let inVari6Over = 0;
    let inVari7Up = 0;
    let inVari7Over = 0;
    let inVari8Up = 0;
    let inVari8Over = 0;
    let inVari9Up = 0;
    let inVari9Over = 0;
    let inVari10Up = 0;
    let inVari10Over = 0;
    

    //Funcion que pone en el STATE el ID de la variante presionada
    const handleChange = e => {
        if(variante === 0){
            setVariante(Number(e.target.id));
        }
    }    

    useEffect(() => {
        if (figura > 0){
            inVari1Up = (figura * 3) - 2;
            inVari1Over = (figura * 3) - 2 + 1;
            inVari2Up = (figura * 3) - 2;
            inVari2Over = (figura * 3) - 2 + 1;
            inVari3Up = (figura * 3) - 2;
            inVari3Over = (figura * 3) - 2 + 1;
            inVari4Up = (figura * 3) - 2;
            inVari4Over = (figura * 3) - 2 + 1;
            inVari5Up = (figura * 3) - 2;
            inVari5Over = (figura * 3) - 2 + 1;
            inVari6Up = (figura * 3) - 2;
            inVari6Over = (figura * 3) - 2 + 1;
            inVari7Up = (figura * 3) - 2;
            inVari7Over = (figura * 3) - 2 + 1;
            inVari8Up = (figura * 3) - 2;
            inVari8Over = (figura * 3) - 2 + 1;
            inVari9Up = (figura * 3) - 2;
            inVari9Over = (figura * 3) - 2 + 1;
            inVari10Up = (figura * 3) - 2;
            inVari10Over = (figura * 3) - 2 + 1;
            btnVar1.current.src = imgListV1[(figura * 3) - 2];
            btnVar2.current.src = imgListV2[(figura * 3) - 2];
            btnVar3.current.src = imgListV3[(figura * 3) - 2];
            btnVar4.current.src = imgListV4[(figura * 3) - 2];
            btnVar5.current.src = imgListV5[(figura * 3) - 2];
            btnVar6.current.src = imgListV6[(figura * 3) - 2];
            btnVar7.current.src = imgListV7[(figura * 3) - 2];
            btnVar8.current.src = imgListV8[(figura * 3) - 2];
            btnVar9.current.src = imgListV9[(figura * 3) - 2];
            btnVar10.current.src = imgListV10[(figura * 3) - 2];
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
        inVari1Up = inVari1Over = inVari2Up = inVari3Up = inVari3Over = inVari4Up = inVari4Over = inVari5Up = inVari5Over = inVari6Up = inVari6Over = inVari7Up = inVari7Over = inVari8Up = inVari8Over = inVari9Up = inVari9Over = inVari10Up = inVari10Over = 0
        btnVar1.current.src = imgListV1[0];
        btnVar2.current.src = imgListV2[0];
        btnVar3.current.src = imgListV3[0];
        btnVar4.current.src = imgListV4[0];
        btnVar5.current.src = imgListV5[0];
        btnVar6.current.src = imgListV6[0];
        btnVar7.current.src = imgListV7[0];
        btnVar8.current.src = imgListV8[0];
        btnVar9.current.src = imgListV9[0];
        btnVar10.current.src = imgListV10[0];
    }

    function deshabilitarVariantes(variante){
        btnVar1.current.src = imgListV1[(figura * 3)];
        btnVar2.current.src = imgListV2[(figura * 3)];
        btnVar3.current.src = imgListV3[(figura * 3)];
        btnVar4.current.src = imgListV4[(figura * 3)];
        btnVar5.current.src = imgListV5[(figura * 3)];
        btnVar6.current.src = imgListV6[(figura * 3)];
        btnVar7.current.src = imgListV7[(figura * 3)];
        btnVar8.current.src = imgListV8[(figura * 3)];
        btnVar9.current.src = imgListV9[(figura * 3)];
        btnVar10.current.src = imgListV10[(figura * 3)];
        inVari1Up = inVari1Over = inVari2Up = inVari2Over = inVari3Up = inVari3Over = inVari4Up = inVari4Over = inVari5Up = inVari5Over = inVari6Up = inVari6Over = inVari7Up = inVari7Over = inVari8Up = inVari8Over = inVari9Up = inVari9Over = inVari10Up = inVari10Over = (figura * 3);
        switch (variante) {
            case 11:
                btnVar1.current.src = imgListV1[(figura * 3) - 2];
                inVari1Up = (figura * 3) - 2;
                inVari1Over = (figura * 3) - 2;               
                break;
            case 12:
                btnVar2.current.src = imgListV2[(figura * 3) - 2];
                inVari2Up = (figura * 3) - 2;
                inVari2Over = (figura * 3) - 2;               
                break;
            case 13:
                btnVar3.current.src = imgListV3[(figura * 3) - 2];
                inVari3Up = (figura * 3) - 2;
                inVari3Over = (figura * 3) - 2;               
                break;
            case 14:
                btnVar4.current.src = imgListV4[(figura * 3) - 2];
                inVari4Up = (figura * 3) - 2;
                inVari4Over = (figura * 3) - 2;               
                break;
            case 15:
                btnVar5.current.src = imgListV5[(figura * 3) - 2];
                inVari5Up = (figura * 3) - 2;
                inVari5Over = (figura * 3) - 2;               
                break;
            case 16:
                btnVar6.current.src = imgListV6[(figura * 3) - 2];
                inVari6Up = (figura * 3) - 2;
                inVari6Over = (figura * 3) - 2;               
                break;
            case 17:
                btnVar7.current.src = imgListV7[(figura * 3) - 2];
                inVari7Up = (figura * 3) - 2;
                inVari7Over = (figura * 3) - 2;               
                break;
            case 18:
                btnVar8.current.src = imgListV8[(figura * 3) - 2];
                inVari8Up = (figura * 3) - 2;
                inVari8Over = (figura * 3) - 2;               
                break;
            case 19:
                btnVar9.current.src = imgListV9[(figura * 3) - 2];
                inVari9Up = (figura * 3) - 2;
                inVari9Over = (figura * 3) - 2;               
                break;
            case 20:
                btnVar10.current.src = imgListV10[(figura * 3) - 2];
                inVari10Up = (figura * 3) - 2;
                inVari10Over = (figura * 3) - 2;               
                break;
            default:
                btnVar1.current.src = imgListV1[(figura * 3) - 2];
                inVari1Up = (figura * 3) - 2;
                inVari1Over = (figura * 3) - 2;                 
                break;
        }
    }

    return ( 
        <ContenedorVariantes>
            <BotonVariantes>
                <img 
                    id="11"
                    key="11"
                    src={imgListV1[inVari1Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV1[inVari1Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV1[inVari1Up])}
                    ref={btnVar1}
                />                
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="12"
                    key="12"
                    src={imgListV2[inVari2Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV2[inVari2Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV2[inVari2Up])}
                    ref={btnVar2}
                />  
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="13"
                    key="13"
                    src={imgListV3[inVari3Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV3[inVari3Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV3[inVari3Up])}
                    ref={btnVar3}
                />
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="14"
                    key="14"
                    src={imgListV4[inVari4Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV4[inVari4Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV4[inVari4Up])}
                    ref={btnVar4}
                />                 
            </BotonVariantes>


            <BotonVariantes>
                <img 
                    id="15"
                    key="15"
                    src={imgListV5[inVari5Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV5[inVari5Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV5[inVari5Up])}
                    ref={btnVar5}
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="16"
                    key="16"
                    src={imgListV6[inVari6Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV6[inVari6Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV6[inVari6Up])}
                    ref={btnVar6}
                />                 
            </BotonVariantes>   

            <BotonVariantes>
                <img 
                    id="17"
                    key="17"
                    src={imgListV7[inVari7Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV7[inVari7Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV7[inVari7Up])}
                    ref={btnVar7}
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="18"
                    key="18"
                    src={imgListV8[inVari8Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV8[inVari8Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV8[inVari8Up])}
                    ref={btnVar8}
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="19"
                    key="19"
                    src={imgListV9[inVari9Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV9[inVari9Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV9[inVari9Up])}
                    ref={btnVar9}
                />                 
            </BotonVariantes>

            <BotonVariantes>
                <img 
                    id="20"
                    key="20"
                    src={imgListV10[inVari10Up]}
                    onClick={handleChange} 
                    onMouseOver={e => (e.currentTarget.src = imgListV10[inVari10Over])}
                    onMouseLeave={e => (e.currentTarget.src = imgListV10[inVari10Up])}
                    ref={btnVar10}
                />  
            </BotonVariantes>

        </ContenedorVariantes>
     );
}
 
export default Variantes;