import React, { Fragment, useState, useEffect, useContext } from 'react';
import Instruccionclass from './Instruccionclass';
import Errorinput from './Errorinput';
import programaContext from '../context/programa/programaContext';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import styles from './Nuevainstruccion.module.css';

const Nuevainstruccion = (props) => {

    const instruccionesContext = useContext(programaContext);
    const { programa, agregarInstruccion } = instruccionesContext;


    let {nvaInstruccion, setnvaInstruccion} = props;
    const [tipoInstruccion, settipoInstruccion] = useState(0);
    const [nombreInstruccion, setnombreInstruccion] = useState('')
    const [tituloInstruccion, setTituloInstruccion] = useState('');
    const [parametron, setParametron] = useState(0);
    const [errorinput, setErrorinput] = useState(false);
    const [mensajeerror, setMensajeerror] = useState('');
    /*Hay 11 tipos de instrucciónes */

    useEffect(() => {
        setErrorinput(false);
        setParametron(0);
    }, [tipoInstruccion]);//Cuando se cambia el tipo de instrucción (cambio en el select )

    const asignarInstruccion = e => {
        settipoInstruccion(parseInt(e.target.value));
        let titulo = ' ';
        switch (parseInt(e.target.value)) {
            case 1:
                titulo = 'Ir al origen';
                break;
            case 2:
                titulo='Ir al mosaico n';
                break;
            case 3:
                titulo='Cargar mosaico';
                break;
            case 4:
                titulo='Descarga mosaico';
                break;
            case 5:
                titulo='Gira Robot';
                break;
            case 6:
                titulo='Gira Mosaico';
                break;
            case 7:
                titulo='Avanza Robot';
                break;
            case 8:
                titulo='Mientras';
                break;
            case 9:
                titulo='Repite';
                break;
            case 10:
                titulo='Condición Si..Entonces';
                break;
            case 11:
                titulo = 'Subrutina';
                break;
            default:
                titulo = 'Ir al origen';
                break;
        } 
        setnombreInstruccion(titulo)
        setTituloInstruccion(titulo);
    }

    const gotoMosaicoN = e => {
        setParametron(parseInt(e.target.value, 10));
    }

    const giraRobot = e => {
        setParametron(parseInt(e.target.value, 10) * 90);
    }

    const giramosaico = e => {
        setParametron(parseInt(e.target.value, 10) * 90);
    }

    const avanzaRobot = e => {
        setParametron(parseInt(e.target.value, 10));
    }

    function validarParametros(){
        let error = false;
        let mensaje = '';
        switch (tipoInstruccion) {
            case 0: //No hay instrucción seleccionada
                error = true;
                mensaje = 'Selecciona la instrucción que deseas agregar';
                break;
            case 1: //No necesita parámetros ir al Origen
                break;
            case 2: //Ir al Mosaico N del almacen ahorita está limitado a 10 mosaicos
                if ((parametron <= 0) || (parametron > 10)){
                    error = true;
                    mensaje = 'Selecciona un mosaico que exista en el almacen';
                }
                break;
            case 3: //Carga mosaico no necesita parámetros
                break;
            case 4: //Descarga mosaicos no necesita parámetros
                break;
            case 5: // Gira Robot necesita parámetros
                if((parametron <= 0)||(parametron > 360)){
                    error = true;
                    mensaje = 'El giro debe ser mayor a 0 grados y menor a 360 grados';
                }
                break;
            case 6: // Gira Mosaico necesita parámetros
                if((parametron <= 0)||(parametron > 360)){
                    error = true;
                    mensaje = 'El giro debe ser mayor a 0 grados y menor a 360 grados';
                }
                break;
            case 7: // Avanza Robot necesita parámetros de numero de casillas
                if((parametron <= 0)||(parametron > 30)){
                    error = true;
                    mensaje = 'El robot solo se puede mover en un valor menor a 30';
                }
                break;
            case 8:
                error = true;
                mensaje = 'La instrucción Mientras no ha sido implementada';
                break;
            case 9:
                error = true;
                mensaje = 'La instrucción Repite no ha sido implementada';
                break;
            case 10:
                error = true;
                mensaje = 'La instrucción IF no ha sido implementada';
                break;
            case 11:
                error = true;
                mensaje = 'La instrucción Subrutina no ha sido implementada';
                break;
            default:
                setErrorinput(true);
                setMensajeerror('Selecciona la instrucción que deseas agregar');
                break;
        }
        setErrorinput(error);
        setMensajeerror(mensaje);
        if(!error){
            let ins = new Instruccionclass(programa.length, tipoInstruccion, parametron, nombreInstruccion);
            agregarInstruccion(ins);
            setnvaInstruccion(false);
        }
    }
    
    return ( 
        <Fragment>
            <div className={`${styles.nuevaInstruccion}`}>
                <div>
                   <label className={`${styles.tituloInstruccion}`}>{tituloInstruccion}</label> 
                </div>
                <div className={`${styles.tipoinstruccion}`}>
                    <select 
                        id='tipoinstruccion' 
                        onChange={asignarInstruccion}
                        defaultValue= "0">
                        <option value="0">Selecciona</option>
                        <option value="1">Origen</option>
                    {/*   <option value="2">Mosaico n</option>  */}
                    {/*    <option value="3">Carga mosaico</option> */}
                    {/*    <option value="4">Descarga mosaico</option> */}
                        <option value="5">Gira Robot</option>
                    {/*    <option value="6">Gira Mosaico</option> */}
                        <option value="7">Avanza Robot</option>
                    {/*    <option value="8">Mientras</option>
                        <option value="9">Repite</option>
                        <option value="10">Si (condicion) entonces</option>
                        <option value="11">Subrutina</option> */}
                    </select>
                </div>
                {(2 === tipoInstruccion)?(
                    <select 
                    id='mosaicoalmacen' 
                    onChange={gotoMosaicoN}
                    defaultValue= "0">
                    <option value="0">Selecciona un valor</option>
                    <option value="1">Ir al mosaico 1</option>
                    <option value="2">Ir al mosaico 2</option>
                    <option value="3">Ir al mosaico 3</option>
                    <option value="4">Ir al mosaico 4</option>
                    <option value="5">Ir al mosaico 5</option>
                    <option value="6">Ir al mosaico 6</option>
                    <option value="7">Ir al mosaico 7</option>
                    <option value="8">Ir al mosaico 8</option>
                    <option value="9">Ir al mosaico 9</option>
                    <option value="10">Ir al mosaico 10</option>
                </select>
                )
                :null}

                {(5 === tipoInstruccion)?(
                    <select 
                    id='girarobot' 
                    onChange={giraRobot}
                    defaultValue= "0">
                    <option value="0">Selecciona un valor</option>
                    <option value="1">Gira Robot 90 grados</option>
                    <option value="2">Gira Robot 180 grados</option>
                    <option value="3">Gira Robot 270 grados</option>
                </select>
                )
                :null}

                {(6 === tipoInstruccion)?(
                    <select 
                    id='giramosaico' 
                    onChange={giramosaico}
                    defaultValue= "0">  
                    <option value="0">Selecciona un valor</option>
                    <option value="1">Gira el mosaico 90 grados</option>
                    <option value="2">Gira el mosaico 180 grados</option>
                    <option value="3">Gira el mosaico 270 grados</option>
                </select>
                )
                :null}

                {(7 === tipoInstruccion)?(
                    <select 
                    id='avanza' 
                    onChange={avanzaRobot}
                    defaultValue= "0">
                    <option value="0">Selecciona un valor</option>
                    <option value="1">1 casilla</option>
                    <option value="2">2 casilla</option>
                    <option value="3">3 casilla</option>
                    <option value="4">4 casilla</option>
                    <option value="5">5 casilla</option>
                    <option value="6">6 casilla</option>
                    <option value="7">7 casilla</option>
                    <option value="8">8 casilla</option>
                    <option value="9">9 casilla</option>
                </select>
                )
                :null}

                <div>
                    {(errorinput) ? <Errorinput mensaje = {mensajeerror} /> : null}
                    <Button
                        type="button"
                        onClick={ () => setnvaInstruccion(false) }
                        style={{minWidth: '4px'}}
                    >Cancelar</Button>
                    <Button
                        type="button"
                        onClick={ () => validarParametros() }
                    >Aceptar</Button>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Nuevainstruccion;