
import { AGREGAR_INSTRUCCION, SET_XX, SET_YY, SET_DIRECCION, ELIMINAR_INSTRUCCION, SET_INSTACTUAL } from '../../types'; 

export default (state, action) => {
    switch (action.type) {
        case ELIMINAR_INSTRUCCION:
            return {
                ...state,
                programa: state.programa.filter(instruccion => instruccion.id !== action.payload)
            }
        case AGREGAR_INSTRUCCION:
            return {
                ...state,
                programa: [...state.programa, action.payload]
            }
        case SET_XX:
            return {
                ...state,
                xx: action.payload
            }
        case SET_YY:
            return {
                ...state,
                yy: action.payload
            }
        case SET_DIRECCION:
            return {
                ...state,
                direccion: action.payload
            }
        case SET_INSTACTUAL:
            return {
                ...state,
                instActual: action.payload
            }
        default : return state;
    }
}