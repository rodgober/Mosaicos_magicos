import React, { useState, useContext, useEffect } from 'react';
import salaContext from '../context/salas/salaContext'

import { obtenerXInicialMos, obtenerYInicialMos, obtenerMosXSeleccionado, obtenerXDelMosSeleccionado, obtenerLargoAlmacen, obtenerAltoAlmacen, obtenerNumMosaicosXLargoImagen } from '../helper';

const Almacenes = React.forwardRef((props,ref) => {

    const refInput = React.createRef();

    const salaContexto = useContext(salaContext);
    const { alto, largo, separacion, almacen, setAlmacen, mosSeleccionado, setMosSeleccionado } = salaContexto;
    const canvasRef = ref;

    useEffect (()=>{
        if (almacen<=0){
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'white';            
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            setAlmacen(0);
            setMosSeleccionado(0);
        }
    }, []);


    const handleChange = e => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left; //Obtiene coordenada X donde el usuario dio clic
        let y = e.clientY - rect.top; // Obtiene coordenada Y donde el usuario dio clic
        let numMos = obtenerMosXSeleccionado(x, largo, separacion); //Obtenemos el numero de mosaico seleccionado
        if (numMos !== mosSeleccionado && numMos <= almacen) { //El mosaico debe ser diferente al seleccionado con anterioridad y debe ser menor al tamaño del almacen
            ctx.strokeStyle = 'white'; //El color blanco del cuadro para borrar la seleccion del mosaico seleccionado con anterioridad
            ctx.lineWidth = 3; //Grosor 3 para borar el marco negrocon grosor 2
            let xx = obtenerXDelMosSeleccionado(mosSeleccionado, largo, separacion); //Obtiene la coordenada X del mosaico seleccionado
            ctx.strokeRect(xx, 0, separacion + largo + separacion, separacion + alto + separacion); // imprime el marco blanco
            ctx.strokeStyle = 'black'; //Coloca el color negro para el marco del mosaico seleccionado
            ctx.lineWidth = 2; //El marco de grosor 2 para que pueda ser borrado por el marco blanco
            const xInicialMos = obtenerXInicialMos(x, largo, separacion); //Se obtiene la coordenada X del marco a pintar 
            const yInicialMos = obtenerYInicialMos(y, alto, separacion); //Se obtiene la coordenada Y del marco a pintar 
            ctx.strokeRect(xInicialMos, yInicialMos, separacion + largo + separacion, separacion + alto + separacion); //Se pinta el marco negro 
            setMosSeleccionado(numMos);//Guarda el nuevo mosaico seleccionado   
            }
     
    }

    const abrirAlmacen = e => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';  
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setMosSeleccionado(0);//Ya no hay mosaico seleccionado
    
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
            let numMos = obtenerNumMosaicosXLargoImagen(img.naturalWidth, largo, separacion);
            setAlmacen(numMos);
          ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        };
        console.log(img.naturalWidth);
    }
        

    const eliminartodos = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';  
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setAlmacen(0);
        setMosSeleccionado(0);//Ya no hay mosaico seleccionado
    }

    const borrarMos = () => {
        if (mosSeleccionado > 0 && almacen > 0){  //Si existen mosaicos en el almacen y hay alguno seleccionado
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = 'white'; //El color blanco del cuadro para borrar la seleccion del mosaico seleccionado con anterioridad
            ctx.lineWidth = 3; //Grosor 3 para borar el marco negrocon grosor 2
            let xx = obtenerXDelMosSeleccionado(mosSeleccionado, largo, separacion); //Obtiene la coordenada X del mosaico seleccionado
            ctx.strokeRect(xx, 0, separacion + largo + separacion, separacion + alto + separacion); // imprime el marco blanco
            xx = obtenerXDelMosSeleccionado(mosSeleccionado+1, largo, separacion);
            var imgData = ctx.getImageData(xx, 0, canvas.width-xx, canvas.height); //Obtiene la imagen  del canvas del mosaico en TRANSICION   
            xx = obtenerXDelMosSeleccionado(mosSeleccionado, largo, separacion);          
            ctx.putImageData(imgData, xx, 0);
            setAlmacen(almacen -1);
            setMosSeleccionado(0);//Ya no hay mosaico seleccionado
        }
    }

    const guardar = () => {
        if (almacen > 0){
            const canvas = canvasRef.current;
            if (mosSeleccionado > 0){  //Si existen mosaicos en el almacen y hay alguno seleccionado
                
                const ctx = canvas.getContext('2d');
                ctx.strokeStyle = 'white'; //El color blanco del cuadro para borrar la seleccion del mosaico seleccionado con anterioridad
                ctx.lineWidth = 3; //Grosor 3 para borar el marco negrocon grosor 2
                let xx = obtenerXDelMosSeleccionado(mosSeleccionado, largo, separacion); //Obtiene la coordenada X del mosaico seleccionado
                ctx.strokeRect(xx, 0, separacion + largo + separacion, separacion + alto + separacion); // imprime el marco blanco
                setMosSeleccionado(0);//Ya no hay mosaico seleccionado
            }
            let canvasdwn = document.createElement('canvas'); //Crea el canvas que va a descargar
            canvasdwn.width = obtenerLargoAlmacen(almacen, largo, separacion); //le coloca el largo del canvas dependiendo de los mosaicos
            canvasdwn.height = obtenerAltoAlmacen(alto, separacion);//coloca el alto del canvas
            var destCtx = canvasdwn.getContext('2d');
            destCtx.drawImage(canvas, 0, 0); //Copia la imagen del canvas del almacen al canvas que va a descargar con el tamaño mínimo necesario
            let downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'almacen.png');
            let dataURL = canvasdwn.toDataURL('image/png');
            let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
            downloadLink.setAttribute('href',url);
            downloadLink.click();
        }

    }

    return ( 
        <div>
            <div>
                <p>Almacen</p>
                <canvas
                    ref={ref}
                    id='canv'
                    width='1000'
                    height={separacion + largo + separacion}
                    onClick={handleChange}
                />
            </div>

            <div>

                <input type="file" id="fileUpload" 
                    onChange={abrirAlmacen}
                    ref={refInput}/>
 

                <button 
                    type="button"
                    onClick={guardar}
                >Guardar
                </button>

                <button
                    type="button"
                    onClick={ () => borrarMos() }                
                >Eliminar 1</button>
                <button
                    type="button"
                    onClick={ () => eliminartodos() }                
                >Eliminar todos</button>

            </div>
        </div> 
     );
});
 
export default Almacenes;