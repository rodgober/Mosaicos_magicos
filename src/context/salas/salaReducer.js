import { SALA_HABILITADA, SET_ALMACEN, SET_MOSSELECCIONADO } from '../../types';

export default (state, action) => {
    switch(action.type) {
        case SALA_HABILITADA:
            return{
                ...state,
                sala: action.payload
            }
        case SET_ALMACEN:
            return{
                ...state,
                almacen: action.payload
            }
        case SET_MOSSELECCIONADO:
            return{
                ...state,
                mosSeleccionado: action.payload
            }
        default:
            return state;
    }
}