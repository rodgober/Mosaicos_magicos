import { SALA_HABILITADA, SET_ALMACEN, SET_MOSSELECCIONADO, SET_ALMACEN_COLLAGE } from '../../types';

export default function salaReducer(state, action)  {
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
        case SET_ALMACEN_COLLAGE:
            return{
                ...state,
                almacenCollages: action.payload
            }
        default:
            return state;
    }
}