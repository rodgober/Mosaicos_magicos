import React, { useContext } from 'react';
import salaContext from '../context/salas/salaContext'
import styles from './Programacion.module.css';
import Controles from './Controles';
import Panelprograma from './Panelprograma';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SaveIcon from '@material-ui/icons/Save';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import PropTypes from 'prop-types';



const Programacion = React.forwardRef((props,ref) => {
    const salaContexto = useContext(salaContext);
    const { alto, largo, separacion, mosSeleccionado } = salaContexto;
    const canvasAlmacenes = ref;  // Toma la referencia del canvas del Almacen que se pasa por parámetro en la llamada del componente
    const canvasMural = React.createRef(); //Crea la referencia del canvas del Mural donde se pegan los mosaicos
    const refInput = React.createRef(); //Crea la referencia al input que permite abrir el mural
    /***********************************/  
    /*FUNCIONES DE LA SALA MURALES */
    /******************************** */
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
        for (let xx = 0; xx <= 12; xx++) {
            ctx.moveTo((alto * xx)+xx,0);
            ctx.lineTo((alto * xx)+xx, (8*alto)+9);
            ctx.stroke();
        }
        for (let xx = 0; xx <= 8; xx++) {
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
        var windowContent = '<img src="' + dataURL + '">';
        var printWin = window.open('','','width=800,height=600');
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.focus();
        printWin.print();
    }
    /* ********************************* */
    /* FIN DE LAS FUNCIONES DE MURALES */
    /* ********************************* */

    return ( 
        <div>
            <Controles>

            </Controles>
            <div className={`${styles.cont_programacion}`}  >
                <canvas
                        ref={canvasMural}
                        width={(12*largo)+13}
                        height={(8*largo)+9}
                        className={`${styles.canvas_mural}`}
                />
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
                            ></SaveIcon>
                        </Button>

                        <Button
                            type="button"
                            onClick={ () => limpiaMuralBtn() }
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
                <Panelprograma>

                </Panelprograma>
            </div>
        </div> 
    );
});
 
export default Programacion;