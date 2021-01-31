import React, { useReducer } from 'react';
import programaContext from './programaContext';
import programaReducer from './programaReducer';
import { 
        AGREGAR_INSTRUCCION,
        ELIMINAR_INSTRUCCION,
        SET_XX,
        SET_YY,
        SET_DIRECCION,
        SET_INSTACTUAL
        } from '../../types';

const ProgramaState = props => {
    const initialState = {
        programa: [],
        xx:1,
        yy:1,
        direccion:2,
        instActual:0 //Instrucción que está ejectando en ese momento
    }

    const [state, dispatch] = useReducer(programaReducer, initialState);

    const agregarInstruccion = Instruccion => {
        dispatch({
            type: AGREGAR_INSTRUCCION,
            payload: Instruccion
        })
    }

    const eliminarInstruccion = id => {
        dispatch({
            type: ELIMINAR_INSTRUCCION,
            payload: id
        })
    }

    const setXX = valor => {
        dispatch({
            type: SET_XX,
            payload: valor
        })
    }

    const setYY = valor => {
        dispatch({
            type: SET_YY,
            payload: valor
        })
    }

    const setDireccion = valor => {
        dispatch({
            type: SET_DIRECCION,
            payload: valor
        })
    }

    const setinstActual = valor => {
        dispatch({
            type: SET_INSTACTUAL,
            payload: valor
        })
    }
    return (
        <programaContext.Provider
            value={{
                programa: state.programa,
                xx: state.xx,
                yy: state.yy,
                direccion: state.direccion,
                instActual: state.instActual,
                agregarInstruccion,
                eliminarInstruccion,
                setXX,
                setYY,
                setDireccion,
                setinstActual
            }}
        >
            {props.children}
        </programaContext.Provider>
    )
}

export default ProgramaState; 