import React, { useEffect, useContext } from 'react';
import salaContext from '../context/salas/salaContext'
import styles from './Sala.module.css';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SaveIcon from '@material-ui/icons/Save';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import PropTypes from 'prop-types';

import { obtenerXDelMosSeleccionado, obtenerMosXSeleccionadoMu, obtenerXDelMosSeleccionadoMu, obtenerMosYSeleccionadoMu, obtenerYDelMosSeleccionadoMu } from '../helper';

const Murales = React.forwardRef((props,ref) => {

    const salaContexto = useContext(salaContext);
    const { alto, largo, separacion, mosSeleccionado } = salaContexto;
    const canvasAlmacenes = ref;  // Toma la referencia del canvas del Almacen que se pasa por parámetro en la llamada del componente
    const canvasMural = React.createRef(); //Crea la referencia del canvas del Mural donde se pegan los mosaicos
    const refInput = React.createRef(); //Crea la referencia al input que permite abrir el mural

    const handleChange = e => {
        if(mosSeleccionado > 0){
            const canvasAlm = canvasAlmacenes.current; //El current del Almacen
            const canvasMu = canvasMural.current;       //El current del Mural
            const ctxAlm = canvasAlm.getContext('2d');  //Crea el contexto donde tomará el mosaico seleccionado
            const ctxMural = canvasMu.getContext('2d'); //Crea el contexto donde pintará el mosaico seleccionado
            let xx = obtenerXDelMosSeleccionado(mosSeleccionado, largo, separacion); //Obtiene la coordenada X del mosaico seleccionado
            var imgMosaico = ctxAlm.getImageData(xx + separacion, separacion, largo, alto);//Toma el mosaico del almacen
            let rect = canvasMu.getBoundingClientRect();
            let x = e.clientX - rect.left; //Obtiene coordenada X donde el usuario dio clic
            let y = e.clientY - rect.top; // Obtiene coordenada Y donde el usuario dio clic
            let numMosX = obtenerMosXSeleccionadoMu(x, largo, separacion); //Obtenemos el numero de mosaico seleccionado
            xx = obtenerXDelMosSeleccionadoMu(numMosX, largo, separacion); //Obtiene la coordenada X del mosaico seleccionado
            let numMosY = obtenerMosYSeleccionadoMu(y, alto, separacion); //Obtenemos el numero de mosaico seleccionado
            let yy = obtenerYDelMosSeleccionadoMu(numMosY, alto, separacion); //Obtiene la coordenada X del mosaico seleccionado
            ctxMural.putImageData(imgMosaico, xx+1 , yy+1); //Estampa el mosaico en el Mural
            let dataImg = canvasMu.toDataURL(); //convierte la imagen a una cadena base 64
            localStorage.setItem('mural', dataImg); //guarda la cadena en base 64 en el Local Storage
        }
    }

    function limpiaMuralBtn(){
        const canvasMu = canvasMural.current;       //El current del Mural
        const ctxMural = canvasMu.getContext('2d');
        limpiaMural(ctxMural);
    }

    function limpiaMural(ctx){
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, (12*largo)+13, (8*largo)+9);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        for (let xx = 0; xx < 12; xx++) {
            ctx.moveTo((alto * xx)+xx,0);
            ctx.lineTo((alto * xx)+xx, (8*alto)+9);
            ctx.stroke();
        }
        for (let xx = 0; xx < 8; xx++) {
            ctx.moveTo(0,(largo * xx)+xx);
            ctx.lineTo((largo * 12 ) + 12,(largo * xx)+xx);
            ctx.stroke();
        }
    }

    const abrirMuralBtn = e => {
           
        const canvas = canvasMural.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
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

    const guardar = () => {

            const canvas = canvasMural.current;

            let canvasdwn = document.createElement('canvas'); //Crea el canvas que va a descargar
            canvasdwn.width = (12*largo)+13; //le coloca el largo del canvas dependiendo de los mosaicos
            canvasdwn.height = (8*alto)+9;//coloca el alto del canvas
            var destCtx = canvasdwn.getContext('2d');
            destCtx.drawImage(canvas, 0, 0); //Copia la imagen del canvas del almacen al canvas que va a descargar con el tamaño mínimo necesario
            let downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'mural.png');
            let dataURL = canvasdwn.toDataURL('image/png');
            let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
            downloadLink.setAttribute('href',url);
            downloadLink.click();
    }

    const imprimir = () => {
        const canvas = canvasMural.current;
        let canvasdwn = document.createElement('canvas'); //Crea el canvas que va a descargar
        canvasdwn.width = (12*largo)+13; //le coloca el largo del canvas dependiendo de los mosaicos
        canvasdwn.height = (8*alto)+9;//coloca el alto del canvas
        var destCtx = canvasdwn.getContext('2d');
        destCtx.drawImage(canvas, 0, 0); //Copia la imagen del canvas del almacen al canvas que va a descargar con el tamaño mínimo necesario
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'mural.png');
        let dataURL = canvasdwn.toDataURL('image/png');
/*
        var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Murales</title></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataURL + '">';
    windowContent += '</body>';
    windowContent += '</html>';*/

        var windowContent = '<img src="' + dataURL + '">';
        var printWin = window.open('','','width=800,height=600');
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        //printWin.close();
   /*     printWin.document.addEventListener('load', function() {
            printWin.focus();
            printWin.print();
            printWin.document.close();
        //    printWin.close();            
        }, true); */
        
    }

    useEffect (()=>{
        const mural1 = localStorage.getItem('mural');
        const canvasMu = canvasMural.current;
        const ctxMural = canvasMu.getContext('2d'); //Crea el contexto donde pintará el mosaico seleccionado    
        if(mural1 === null){
            limpiaMural(ctxMural);
        }else{
            let img = new Image();
            img.src = mural1;
            ctxMural.restore();
            ctxMural.drawImage(img, 0, 0, canvasMu.width, canvasMu.height);
            img.onload = function() {
                ctxMural.drawImage(img, 0, 0, canvasMu.width, canvasMu.height);
            }
        }
        // eslint-disable-next-line
    }, []);


    return ( 
        <div className={`${styles.mural_y_toolbar}`}  >
            <div className={`${styles.cont_mural}`}  >
                <canvas
                    ref={canvasMural}
                    width={(12*largo)+13}
                    height={(8*largo)+9}
                    onClick={handleChange}
                />
            </div>
            <div className={`${styles.toolbar}`}  >
                    <Button
                        component="label"
                    >
                        <input
                            type="file"
                            id="fileUpload"
                            style={{ display: "none" }}
                            onChange={abrirMuralBtn}
                            ref={refInput}
                        />
                        <FolderOpenIcon></FolderOpenIcon>
                    </Button>

                    <Button
                        type="button"
                        onClick={ () => guardar() }
                    >
                        <SaveIcon></SaveIcon>
                    </Button>

                    <Button
                        type="button"
                        onClick={ () => limpiaMuralBtn() }
                    >
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                    </Button>

                    <Button
                        type="button"
                        onClick={ () => imprimir() }
                    >
                        <PrintIcon></PrintIcon>
                    </Button>
            </div>
        </div>
    );
});
 
Murales.protoTypes = {
    ref: PropTypes.node.isRequired 
}

export default Murales;