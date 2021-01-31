import React, { Fragment, useEffect, useContext, useState } from 'react';
import salaContext from '../context/salas/salaContext';
import programaContext from '../context/programa/programaContext';
import styles from './Programacion.module.css';
import Controles from './Controles';
import Controlmanual from './Controlmanual';
import Panelprograma from './Panelprograma';
import Robot from './Robot'

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SaveIcon from '@material-ui/icons/Save';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import PropTypes from 'prop-types';
import { SimpleMediaQuery, obtenerXDelMosSeleccionado, obtenerXDelMosSeleccionadoMu, obtenerYDelMosSeleccionadoMu, obtenerMosXSeleccionadoMu } from '../helper';




const Programacion = React.forwardRef((props,ref) => {
    const canvasRobot = React.createRef(); // Crea la referencia del mosaico que carga el Robot

    const salaContexto = useContext(salaContext);
    const { alto, largo, separacion, mosSeleccionado, columnas, filas, mosaicoX } = salaContexto;

    const instruccionesContext = useContext(programaContext);
    const { xx, yy } = instruccionesContext;
    
    const canvasAlmacenes = ref;  // Toma la referencia del canvas del Almacen que se pasa por parámetro en la llamada del componente
    const canvasMural = React.createRef(); //Crea la referencia del canvas del Mural donde se pegan los mosaicos
    const refInput = React.createRef(); //Crea la referencia al input que permite abrir el mural
    let fontsize = 35; //el tamaño de los botones del toolbar y depende del tamaño de pantalla

    const [copia, setCopia] = useState(false);
    const [pega, setPega] = useState(false);
    const [giraMosaico, setgiraMosaico] = useState(0);

    useEffect (()=>{
        if(copia === true){       
            const canvasAlm = canvasAlmacenes.current; //El current del Almacen
            const canvasMos = canvasRobot.current;       //El current del Mural
            const ctxAlm = canvasAlm.getContext('2d');  //Crea el contexto donde tomará el mosaico seleccionado
            const ctxMos = canvasMos.getContext('2d'); //Crea el contexto donde pintará el mosaico seleccionado
            let xMosAlmacen = obtenerXDelMosSeleccionado(mosSeleccionado, largo, separacion); //xx Obtiene la coordenada X del mosaico seleccionado
            var imgMosaico = ctxAlm.getImageData(xMosAlmacen + separacion, separacion, largo, alto);//Toma el mosaico del almacen
            ctxMos.putImageData(imgMosaico, 0 , 0); //Copia el mosaico en el Robot
        }
    }, [copia]);

    useEffect(() => {
        if(giraMosaico > 0){
            const canvas = canvasRobot.current;
            const ctx = canvas.getContext('2d');
           //Guarda el contenido del canvas en un canvas temporal
            var tempCanvas = document.createElement("canvas"),
            tempCtx = tempCanvas.getContext("2d");
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            tempCtx.drawImage(canvas,0,0,canvas.width,canvas.height);
            //Rota el canvas usando el centro como su eje de rotación
            ctx.save();
            ctx.translate(largo / 2, alto / 2);
            ctx.rotate(giraMosaico*Math.PI/180);
            ctx.translate(-(largo / 2), -(alto / 2));
            ctx.drawImage(tempCanvas,0,0);
            ctx.restore();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            setgiraMosaico(0);
        }
    }, [giraMosaico])

    useEffect (()=>{
        if(pega === true){       
            const canvasMos = canvasRobot.current; //El current del Almacen
            const canvasMu = canvasMural.current;       //El current del Mural
            const ctxMos = canvasMos.getContext('2d');  //Crea el contexto donde tomará el mosaico seleccionado
            const ctxMural = canvasMu.getContext('2d'); //Crea el contexto donde pintará el mosaico seleccionado
            var imgMosaico = ctxMos.getImageData(0,0, largo, alto);//Toma el mosaico del almacen
            let xMosaico = obtenerXDelMosSeleccionadoMu(xx, largo, separacion);
            let yMosaico = obtenerYDelMosSeleccionadoMu(yy, alto, separacion); //Obtiene la coordenada X del mosaico seleccionado
            ctxMural.putImageData(imgMosaico, xMosaico+1 , yMosaico+1 ); //Estampa el mosaico en el Mural
        }
    }, [pega]);
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
        ctx.fillRect(0, 0, (columnas*largo)+(columnas+1), (filas*largo)+(filas+1));
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        for (let xx = 0; xx <= columnas; xx++) {
            ctx.moveTo((alto * xx)+xx,0);
            ctx.lineTo((alto * xx)+xx, (filas*alto)+(filas+1));
            ctx.stroke();
        }
        for (let xx = 0; xx <= filas; xx++) {
            ctx.moveTo(0,(largo * xx)+xx);
            ctx.lineTo((largo * columnas ) + columnas,(largo * xx)+xx);
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
            canvasdwn.width = (columnas*largo)+(columnas+1); //le coloca el largo del canvas dependiendo de los mosaicos
            canvasdwn.height = (filas*alto)+(filas+1);//coloca el alto del canvas
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
        canvasdwn.width = (columnas*largo)+(columnas+1); //le coloca el largo del canvas dependiendo de los mosaicos
        canvasdwn.height = (filas*alto)+(filas+1);//coloca el alto del canvas
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
    /* ********************************* */
    /* FIN DE LAS FUNCIONES DE MURALES */
    /* ********************************* */

    if (SimpleMediaQuery('(max-width: 1024px)')){
        fontsize = 20;
    }
    
   /* 
        console.log(SimpleMediaQuery('(max-width: 700px)'));
        console.log(SimpleMediaQuery('(max-width: 800px)'));
        console.log(SimpleMediaQuery('(max-width: 900px)'));
        console.log(SimpleMediaQuery('(max-width: 1000px)')); */
    return (
        <Fragment>
        <Robot
            ref={canvasRobot}
            xx={xx}
            yy={yy}
        />
        <div className={`${styles.cont_programacion}`}  >
            <div className={`${styles.ctr_y_mural}`}  >
                <Controlmanual>
                </Controlmanual>
                
                <div className={`${styles.mural_y_toolbar}`}  >
                    <div className={`${styles.cont_mural}`}  >
                        <canvas
                            ref={canvasMural}
                            width={(columnas*largo)+(columnas+1)}
                            height={(filas*largo)+(filas+1)}
                            className={`${styles.canvas_mural}`}
                        />
                    </div>
                    <div className={`${styles.toolbar}`}  >
                        <Button
                            component="label"
                            style={{minWidth: '24px'}}
                        >
                            <input
                                type="file"
                                id="fileUpload"
                                style={{ display: "none" }}
                                onChange={abrirMuralBtn}
                                ref={refInput}
                            />
                            <FolderOpenIcon
                                style={{ fontSize: fontsize }}
                            ></FolderOpenIcon>
                        </Button>
                        <Button
                            type="button"
                            onClick={ () => guardar() }
                            style={{minWidth: '24px'}}
                        >
                            <SaveIcon
                                style={{ fontSize: fontsize }}
                            ></SaveIcon>
                        </Button>
                        <Button
                            type="button"
                            onClick={ () => limpiaMuralBtn() }
                            style={{minWidth: '24px'}}
                        >
                            <DeleteOutlineIcon
                                style={{ fontSize: fontsize }}
                            ></DeleteOutlineIcon>
                        </Button>
                        <Button
                            type="button"
                            onClick={ () => imprimir() }
                            style={{minWidth: '24px'}}
                        >
                            <PrintIcon
                                style={{ fontSize: fontsize }}
                            ></PrintIcon>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`${styles.pnl_programa}`}  >
                    <Controles
                        ref = {canvasAlmacenes}
                        copia={copia}
                        setCopia={setCopia}
                        pega={pega}
                        setPega={setPega}
                        setgiraMosaico={setgiraMosaico}
                    >
                    </Controles>
                    <Panelprograma>
                    </Panelprograma>             
            </div>
             
        </div>
        </Fragment>
    );
});
 
export default Programacion;