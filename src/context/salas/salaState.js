import React, {useReducer} from 'react';
import salaContext from './salaContext';
import salaReducer from './salaReducer';
import { 
        SALA_HABILITADA,
        SET_ALMACEN,
        SET_GUARDAR_ALMACEN,
        SET_MOSSELECCIONADO,
        SET_ALMACEN_COLLAGE
        } from '../../types';

const SalaState = props => {
    const initialState ={
        sala : 4,
        alto: 40,
        largo: 40,
        separacion: 5,
        almacen: 0,
        mosSeleccionado :0,
        almacenCollages: 0,
        altoCollage: 329, 
        largoCollage: 493,
        guardarAlmacen: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(salaReducer, initialState)

    const mostrarSala = id => {
        dispatch({
            type: SALA_HABILITADA,
            payload: id
        })
    }

    const setAlmacen = n => {
        dispatch({
            type: SET_ALMACEN,
            payload: n
        })
    }

    const setGuardarAlmacen = n => {
        dispatch({
            type: SET_GUARDAR_ALMACEN,
            payload: n
        })
    }

    const setMosSeleccionado = n => {
        dispatch({
            type: SET_MOSSELECCIONADO,
            payload: n
        })
    }

    const setAlmacenCollages = n => {
        dispatch({
            type: SET_ALMACEN_COLLAGE,
            payload: n
        })
    }

    return(
        <salaContext.Provider
            value={{
                sala: state.sala,
                alto: state.alto,
                largo: state.largo,
                separacion: state.separacion,
                almacen: state.almacen,
                mosSeleccionado: state.mosSeleccionado,  
                almacenCollages: state.almacenCollages,
                altoCollage:  state.altoCollage, 
                largoCollage: state.largoCollage,
                guardarAlmacen: state.guardarAlmacen,
                setMosSeleccionado, 
                mostrarSala,
                setAlmacen,
                setGuardarAlmacen,
                setAlmacenCollages
            }}
        >
            {props.children}
        </salaContext.Provider>
    )
}

export default SalaState;