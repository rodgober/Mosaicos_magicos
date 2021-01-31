import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { SimpleMediaQuery } from '../helper';


const Instruccion = ({instruccion, eliminarInstruccion, instActual}) => {
    let fontsize = 15;
    let minimo = '10px';

    if (SimpleMediaQuery('(max-width: 768px)')){
        fontsize = 8;
        minimo = '10px';
    }
    if (SimpleMediaQuery('(max-width: 1024px)')){
        fontsize = 10;
        minimo = '10px';
    }
    return ( 
        <li
            key={instruccion.id}
        >
            {(instActual+1 ===  instruccion.id) ? '>' : null}
            {instruccion.tipo === 1
            ? <b>Ir al origen</b>
            : null}

            {instruccion.tipo === 2
            ? <b>Ir al mosaico {instruccion.n} </b>
            : null}

            {instruccion.tipo === 3
            ? <b>Copia mosaico</b>
            : null}

            {instruccion.tipo === 4
            ? <b>Pega mosaico</b>
            : null}

            {instruccion.tipo === 5
            ? <b>Gira Robot {instruccion.n} grados</b>
            : null}

            {instruccion.tipo === 6
            ? <b>Gira mosaico {instruccion.n} grados</b>
            : null}

            {instruccion.tipo === 7
            ? <b>Avanza {instruccion.n} casillas</b>
            : null}

            <Button
                type="button"
                style={{ minWidth: minimo}}
            >
                <DeleteIcon
                    style={{ minWidth: minimo, fontSize: fontsize }}
                    onClick={ () => eliminarInstruccion(instruccion.id) }
                ></DeleteIcon>
            </Button>
        </li>
    );
}
 
export default Instruccion;