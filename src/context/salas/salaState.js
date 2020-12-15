import React, {useReducer} from 'react';
import salaContext from './salaContext';
import salaReducer from './salaReducer';
import { 
    SALA_HABILITADA,
    SET_ALMACEN,
    SET_MOSSELECCIONADO
    } from '../../types';

const SalaState = props => {
    const initialState ={
        sala : 1,
        alto: 40,
        largo: 40,
        separacion: 5,
        almacen: 0,
        mosSeleccionado :0
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

    const setMosSeleccionado = n => {
        dispatch({
            type: SET_MOSSELECCIONADO,
            payload: n
        })
    }

    return ( 
        <salaContext.Provider
            value={{
                sala: state.sala,
                alto: state.alto,
                largo: state.largo,
                separacion: state.separacion,
                almacen: state.almacen,
                mosSeleccionado: state.mosSeleccionado,  
                setMosSeleccionado, 
                mostrarSala,
                setAlmacen
            }}
        >
            {props.children}
        </salaContext.Provider>
     );
}
 
export default SalaState;