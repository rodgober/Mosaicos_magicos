import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const Instruccion = ({instruccion}) => {
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
                    style={{ fontSize: 15 }}
                ></DeleteIcon>
            </Button>
        </li>
    );
}
 
export default Instruccion;