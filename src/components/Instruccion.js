import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { SimpleMediaQuery } from '../helper';


const Instruccion = ({instruccion}) => {
    let fontsize = 15;
    let minimo = '72px';

    if (SimpleMediaQuery('(max-width: 768px)')){
        fontsize = 8;
        minimo = '20px';
    }
    return ( 
        <li
            key={instruccion.id}
        >
            {instruccion.tipo === 1
            ? <b>Ir al origenn</b>
            : null}

            {instruccion.tipo === 2
            ? <b>Ir al mosaico {instruccion.n} del almacen</b>
            : null}

            {instruccion.tipo === 3
            ? <b>Copia mosaico</b>
            : null}

            {instruccion.tipo === 4
            ? <b>Pega mosaico</b>
            : null}

            {instruccion.tipo === 5
            ? <b>Gira el Robot {instruccion.n} grados</b>
            : null}

            {instruccion.tipo === 6
            ? <b>Gira el mosaico {instruccion.n} grados</b>
            : null}

            {instruccion.tipo === 7
            ? <b>Avanza {instruccion.n} casillas</b>
            : null}

            <Button
                type="button"
            >
                <DeleteIcon
                    style={{ minWidth: minimo, fontSize: fontsize }}
                ></DeleteIcon>
            </Button>
        </li>
    );
}
 
export default Instruccion;