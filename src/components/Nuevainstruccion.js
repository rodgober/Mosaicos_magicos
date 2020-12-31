import React, { Fragment, useState } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import styles from './Nuevainstruccion.module.css';

const Nuevainstruccion = (props) => {
    let {nvaInstruccion, setnvaInstruccion} = props;
    const [tipoInstruccion, settipoInstruccion] = useState(0);
    const [tituloInstruccion, setTituloInstruccion] = useState('');
    /*Hay 11 tipos de instrucciónes */

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
        setTituloInstruccion(titulo);
    }

    const gotoMosaicoN = e => {
        console.log('Ir al mosaico: ',parseInt(e.target.value));
    }

    const giraRobot = e => {
        console.log('Gira el Robot:', parseInt(e.target.value) * 90, ' grados')
    }

    const giramosaico = e => {
        console.log('Gira el mosaico:', parseInt(e.target.value) * 90, ' grados');
    }

    const avanzaRobot = e => {
        console.log('Avanza el robot: ', parseInt(e.target.value), ' casillas')
    }

    function validarParametros(){
        switch (tipoInstruccion) {
            case 1:
                console.log('Origen');
                break;
            case 2:
                console.log('Mosaico n');
                break;
            case 3:
                console.log('Carga mosaico');
                break;
            case 4:
                console.log('Descarga mosaico');
                break;
            case 5:
                console.log('Gira Robot');
                break;
            case 6:
                console.log('Gira Mosaico');
                break;
            case 7:
                console.log('Avanza Robot');
                break;
            case 8:
                console.log('Mientras');
                break;
            case 9:
                console.log('Repite');
                break;
            case 10:
                console.log('Condicion IF');
                break;
            case 11:
                console.log('Subrutina');
                break;
            default:
                console.log('Debes seleccionar una instrucción');
                break;
        } 
    }
    
    return ( 
        <Fragment>
            <div className={`${styles.nuevaInstruccion}`}>
                <div>
                    [icon] 
                   <label className={`${styles.tituloInstruccion}`}>{tituloInstruccion}</label> 
                    <Button
                        type="button"
                        onClick={ () => setnvaInstruccion(false) }
                    >
                        <DeleteIcon
                            style={{ fontSize: 35 }}
                        ></DeleteIcon>
                    </Button>
                </div>
                <div className={`${styles.tipoinstruccion}`}>
                    <select 
                        id='tipoinstruccion' 
                        onChange={asignarInstruccion}
                        defaultValue= "0">
                        <option value="0">Selecciona la instrucción</option>
                        <option value="1">Origen</option>
                        <option value="2">Mosaico n</option>
                        <option value="3">Carga mosaico</option>
                        <option value="4">Descarga mosaico</option>
                        <option value="5">Gira Robot</option>
                        <option value="6">Gira Mosaico</option>
                        <option value="7">Avanza Robot</option>
                        <option value="8">Mientras</option>
                        <option value="9">Repite</option>
                        <option value="10">Si (condicion) entonces</option>
                        <option value="11">Subrutina</option>
                    </select>
                </div>
                {(2 === tipoInstruccion)?(
                    <select 
                    id='mosaicoalmacen' 
                    onChange={gotoMosaicoN}
                    defaultValue= "1">
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
                    defaultValue= "1">
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
                    defaultValue= "1">
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
                    defaultValue= "1">
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
                    <Button
                        type="button"
                        onClick={ () => setnvaInstruccion(false) }
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