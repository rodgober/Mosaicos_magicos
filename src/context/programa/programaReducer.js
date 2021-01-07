
import { AGREGAR_INSTRUCCION, SET_XX, SET_YY, SET_DIRECCION } from '../../types'; 

export default (state, action) => {
    switch (action.type) {
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
        default : return state;
    }
}