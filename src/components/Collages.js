import React, { useEffect, useContext, useState } from 'react';
import salaContext from '../context/salas/salaContext'
import PropTypes from 'prop-types';
import styles from './Collages.module.css';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SaveIcon from '@material-ui/icons/Save';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';

import { obtenerXinicialCollage, obtenerYinicialCollage, obtenerLargoSeccionCollage, obtenerAltoSeccionCollage } from '../helper';


const Collages = React.forwardRef((props,ref) => {

    const canvasAlmaCollage = ref;  // Toma la referencia del canvas del Almacen que se pasa por parámetro en la llamada del componente


    const [filas, setFilas] = useState(3);
    const [columnas, setColumnas] = useState(3);
    const salaContexto = useContext(salaContext);
    const {altoCollage, largoCollage } = salaContexto;
    const canvasCollage = React.createRef(); //Crea la referencia del canvas del Collage donde se pegan los murales
    const refInput = React.createRef(); //Crea la referencia al input que permite abrir el mural

    const handleChange = e => {
        const canvasAlm = canvasAlmaCollage.current; //El current del Almacen
        const canvasMu = canvasCollage.current;       //El current del Mural
        const ctxMural = canvasMu.getContext('2d'); //Crea el contexto donde pintará el mosaico seleccionado
        let rect = canvasMu.getBoundingClientRect();
        let x = e.clientX - rect.left; //Obtiene coordenada X donde el usuario dio clic
        let y = e.clientY - rect.top; // Obtiene coordenada Y donde el usuario dio clic
        let xIniCollage = obtenerXinicialCollage(x, columnas, largoCollage);
        let yIniCollage = obtenerYinicialCollage(y, filas, altoCollage);
        let xFinCollage = obtenerLargoSeccionCollage(x, columnas, largoCollage);
        let yFinCollage = obtenerAltoSeccionCollage(y, filas, altoCollage);
        ctxMural.drawImage(canvasAlm, 0, 0, canvasAlm.width-1, canvasAlm.height-1, xIniCollage, yIniCollage, xFinCollage, yFinCollage); //Estampa el mosaico en el Mural
        let dataImg = canvasMu.toDataURL(); //convierte la imagen a una cadena base 64
        localStorage.setItem('collage', dataImg); //guarda la cadena en base 64 en el Local Storage
    }

    function limpiaColage(){
        const canvasRef = canvasCollage;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 1;
        ctx.lineCap = 'butt';
        ctx.fill('nonzero');
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'white';
        ctx.clearRect(0, 0, largoCollage,altoCollage);
        ctx.fillRect(0, 0, largoCollage,altoCollage);
        ctx.beginPath();
        let tamColumnas =  largoCollage / columnas;
        for (let xx = 0; xx < columnas; xx++) {
            ctx.moveTo((tamColumnas * xx),0);
            ctx.lineTo((tamColumnas * xx), altoCollage);
            ctx.stroke();
        }
        let tamFilas = altoCollage / filas;
        for (let yy = 0; yy < filas; yy++) {
            ctx.moveTo(0,(tamFilas * yy));
            ctx.lineTo(largoCollage,(tamFilas * yy));
            ctx.stroke();
        }
    }

    const imprimir = () => {
        const canvasRef = canvasCollage;
        const canvas = canvasRef.current;
        let canvasdwn = document.createElement('canvas'); //Crea el canvas que va a descargar
        canvasdwn.width = largoCollage; //le coloca el largo del canvas dependiendo de los mosaicos
        canvasdwn.height = altoCollage;//coloca el alto del canvas
        var destCtx = canvasdwn.getContext('2d');
        destCtx.drawImage(canvas, 0, 0); //Copia la imagen del canvas del almacen al canvas que va a descargar con el tamaño mínimo necesario
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'collage.png');
        let dataURL = canvasdwn.toDataURL('image/png');

        var windowContent = '<img src="' + dataURL + '">';
        var printWin = window.open('','','width=800,height=600');
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.focus();
        printWin.print();
    }

    const guardar = () => {
        const canvasRef = canvasCollage;
        const canvas = canvasRef.current;
        let canvasdwn = document.createElement('canvas'); //Crea el canvas que va a descargar
        canvasdwn.width = largoCollage; //le coloca el largo del canvas dependiendo de los mosaicos
        canvasdwn.height = altoCollage;//coloca el alto del canvas
        var destCtx = canvasdwn.getContext('2d');
        destCtx.drawImage(canvas, 0, 0); //Copia la imagen del canvas del almacen al canvas que va a descargar con el tamaño mínimo necesario
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'collage.png');
        let dataURL = canvasdwn.toDataURL('image/png');
        let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href',url);
        downloadLink.click();
    }

    const abrirCollageBtn = e => {
        const canvasRef = canvasCollage;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'white';  
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        const img = new Image();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          img.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
     
        img.onload = function() {
          ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        };
    }

    const asignarFilas = e => {
        setFilas(e.target.value);
    }

    const asignarColumnas = e => {
        setColumnas(e.target.value);
    }
    
    useEffect(() => {
        const collage = localStorage.getItem('collage');
        const canvasRef = canvasCollage;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if(collage === null){
            console.log('No hay nada en Storage')
            limpiaColage();  
        }else{
            console.log('Si hay algo');
            let img = new Image();
            img.src = collage;
            ctx.restore();
            ctx.drawImage(img, 0,0,canvas.width, canvas.height)
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        } 
    }, [])

    useEffect(() => {   
        limpiaColage(); 
        // eslint-disable-next-line
    }, [filas, columnas])

    return ( 
        <div className={`${styles.collages_y_toolbar}`}  >
            <div className={`${styles.cont_collage}`}  >
                <canvas
                    ref={canvasCollage}
                    width={largoCollage}
                    height={altoCollage}
                    onClick={handleChange}
                />
            </div>
            <div className={`${styles.toolbar}`}  >
                <p>Filas.</p>
                <select 
                    id='filas'
                    onChange={asignarFilas}
                    className={`${styles.selector}`}
                    defaultValue= "3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <p>Columnas.</p>
                <select 
                    id='columnas' 
                    onChange={asignarColumnas}
                    className={`${styles.selector}`}
                    defaultValue= "3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                            <Button
                                component="label"
                            >
                                <input
                                    type="file"
                                    id="fileUpload"
                                    style={{ display: "none" }}
                                    onChange={abrirCollageBtn}
                                    ref={refInput}
                                />
                                <FolderOpenIcon
                                    style={{ fontSize: 35 }}
                                ></FolderOpenIcon>
                            </Button>

                            <Button
                                type="button"
                                onClick={ () => guardar() }
                            >
                            <SaveIcon
                                style={{ fontSize: 35 }}
                            >
                            </SaveIcon>
                            </Button>

                            <Button
                                        type="button"
                                        onClick={ () => limpiaColage() }
                                    >
                                <DeleteOutlineIcon
                                    style={{ fontSize: 35 }}
                                ></DeleteOutlineIcon>
                            </Button>

                            <Button
                                        type="button"
                                        onClick={ () => imprimir() }
                                    >
                                <PrintIcon
                                    style={{ fontSize: 35 }}
                                ></PrintIcon>
                            </Button>          
                </div>
            </div>
     );
});

Collages.protoTypes = {
    ref: PropTypes.node.isRequired 
}
 
export default Collages;