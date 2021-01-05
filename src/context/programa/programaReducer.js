
import { AGREGAR_INSTRUCCION } from '../../types'; 

export default (state, action) => {
    switch (action.type) {
        case AGREGAR_INSTRUCCION:
            return {
                ...state,
                programa: [...state.programa, action.payload]
            }
        default : return state;
    }
}