import React, { useContext } from 'react';
import salaContext from '../context/salas/salaContext';

const Secciones = () => {


    const salaContexto = useContext(salaContext);
    const { mostrarSala } = salaContexto;

    const onClickMostrarSala = (valor) => {
        mostrarSala(valor);
    }

    return(
        <aside>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={e => onClickMostrarSala(1)}
            >Horno</button>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={e => onClickMostrarSala(2)}
            >Murales</button>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={e => onClickMostrarSala(3)}
            >Collages</button>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={e => onClickMostrarSala(4)}
            >Programación</button>


        </aside>
    )
}
 
export default Secciones;