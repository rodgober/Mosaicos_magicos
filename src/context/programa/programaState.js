import React, { useReducer } from 'react';
import programaContext from './programaContext';
import programaReducer from './programaReducer';
import { AGREGAR_INSTRUCCION } from '../../types';

const ProgramaState = props => {
    const initialState = {
        programa: [],
    }

    const [state, dispatch] = useReducer(programaReducer, initialState);

    const agregarInstruccion = Instruccion => {
        dispatch({
            type: AGREGAR_INSTRUCCION,
            payload: Instruccion
        })
    }

    return (
        <programaContext.Provider
            value={{
                programa: state.programa,
                agregarInstruccion
            }}
        >
            {props.children}
        </programaContext.Provider>
    )
}

export default ProgramaState; 