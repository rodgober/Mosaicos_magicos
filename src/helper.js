import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Dada una coordenada en X, devuelve el valor en X donde inicia el mosaico
export function obtenerXInicialMos(x, largo, separacion){
    const largoMosaico = separacion + largo + separacion;
    return (Math.floor(x / largoMosaico) * largoMosaico);
}

export function SimpleMediaQuery(query) {
    const matches = useMediaQuery(query);
    return (matches);
  }

//Dada una coordenada en Y, devuelve el valor en Y donde inicia el mosaico
export function obtenerYInicialMos(y, alto, separacion){
    const altoMosaico = separacion + alto + separacion;
    return (Math.floor(y / altoMosaico) * altoMosaico);
}

//Dada una coordenada en X, devuelve el valor en X donde termina el mosaico
export function obtenerXFinalMos(x, largo, separacion){
    const largoMosaico = separacion + largo + separacion;
    return (largoMosaico + (Math.floor(x / largoMosaico) * largoMosaico));
}

//Dada una coordenada en Y, devuelve el valor en Y donde termina el mosaico 
export function obtenerYFinalMos(y, alto, separacion){
    const altoMosaico = separacion + alto + separacion;
    return (altoMosaico + (Math.floor(y / altoMosaico) * altoMosaico));
}

//Dada una X, devuelve el número de mosaico seleccionado
export function obtenerMosXSeleccionado(x, largo, separacion){
    return (1 + Math.trunc(x / (largo + separacion + separacion)));
}

//Dado un mosaico, devuelve el valor en X donde inicia
export function obtenerXDelMosSeleccionado(numMosaico, largo, separacion){
    return ((numMosaico - 1)*(separacion + largo + separacion));
}

//Dada una X, devuelve el número de mosaico seleccionado en Murales 1
export function obtenerMosXSeleccionadoMu(x, largo, separacion){
    return (1 + Math.trunc(x / (largo + 1 )));
}

//Dado un mosaico, devuelve el valor en X donde inicia en Murales 1
export function obtenerXDelMosSeleccionadoMu(numMosaico, largo, separacion){
    return ((numMosaico - 1)*(largo + 1));
}

//Dada una Y, devuelve el número de mosaico seleccionado en Murales 1
export function obtenerMosYSeleccionadoMu(y, alto, separacion){
    return (1 + Math.trunc(y / (alto + 1 )));
}

//Dado un mosaico, devuelve el valor en Y donde inicia en Murales 1
export function obtenerYDelMosSeleccionadoMu(numMosaico, alto, separacion){
    return ((numMosaico - 1)*(alto + 1));
}

//Calcula el largo del canvas que tiene el almacen dependiendo de la cantidad de mosaicos y el largo
export function obtenerLargoAlmacen(mosaicos, largo, separacion){
    return (mosaicos * (separacion + largo + separacion))    
}

//Calcula el Alto del canvas que tiene el almacen dependiendo del alto del mosaico y la separación
export function obtenerAltoAlmacen(alto, separacion){
    return (separacion + alto + separacion);    
}

//Devvuelve la cantidad de mosaicos que debería contener un almacen, dado el largo de la imagen
export function obtenerNumMosaicosXLargoImagen(naturalWidth, largo, separacion){
    return Math.trunc(naturalWidth / (separacion + largo + separacion));
}

export function obtenerXinicialCollage(x, columnas, largoCollage){
    const largoSeccion = largoCollage / columnas;
    return (Math.floor(x / largoSeccion) * largoSeccion); 
}

export function obtenerYinicialCollage(y, filas, altoCollage){
    const altoSeccion = altoCollage / filas;
    return (Math.floor(y / altoSeccion) * altoSeccion); 
}

export function obtenerLargoSeccionCollage(x, columnas, largoCollage){
    return largoCollage / columnas;
}

export function obtenerAltoSeccionCollage(y, filas, altoCollage){
    return altoCollage / filas; 
}