import React, { useReducer } from 'react';
import programaContext from './programaContext';
import programaReducer from './programaReducer';
import { 
        AGREGAR_INSTRUCCION,
        SET_XX,
        SET_YY,
        SET_DIRECCION
        } from '../../types';

const ProgramaState = props => {
    const initialState = {
        programa: [],
        xx:1,
        yy:1,
        direccion:2
    }

    const [state, dispatch] = useReducer(programaReducer, initialState);

    const agregarInstruccion = Instruccion => {
        dispatch({
            type: AGREGAR_INSTRUCCION,
            payload: Instruccion
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
    return (
        <programaContext.Provider
            value={{
                programa: state.programa,
                xx: state.xx,
                yy: state.yy,
                direccion: state.direccion,
                agregarInstruccion,
                setXX,
                setYY,
                setDireccion
            }}
        >
            {props.children}
        </programaContext.Provider>
    )
}

export default ProgramaState; 