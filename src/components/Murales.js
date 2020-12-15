import React, { useEffect, useContext } from 'react';
import salaContext from '../context/salas/salaContext'
import { obtenerXDelMosSeleccionado, obtenerMosXSeleccionadoMu, obtenerXDelMosSeleccionadoMu, obtenerMosYSeleccionadoMu, obtenerYDelMosSeleccionadoMu } from '../helper';

const Murales = React.forwardRef((props,ref) => {

    const salaContexto = useContext(salaContext);
    const { alto, largo, separacion, almacen, mosSeleccionado, setMosSeleccionado } = salaContexto;
    const canvasAlmacenes = ref;  // Toma la referencia del canvas del Almacen que se pasa por parámetro en la llamada del componente
    const canvasMural = React.createRef(); //Crea la referencia del canvas del Mural donde se pegan los mosaicos

    

    const handleChange = e => {
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
        console.log('Mosaico seleccionado en Y: ', numMosY);
        let yy = obtenerYDelMosSeleccionadoMu(numMosY, alto, separacion); //Obtiene la coordenada X del mosaico seleccionado
        ctxMural.putImageData(imgMosaico, xx+1 , yy+1); //Estampa el mosaico en el Mural
        let dataImg = canvasMu.toDataURL(); //convierte la imagen a una cadena base 64
        localStorage.setItem('mural', dataImg); //guarda la cadena en base 64 en el Local Storage
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
     //   ctx.rect(0, 0, (12*largo)+13, (8*largo)+9);
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
    }, []);


    return ( 
        <div>
            <canvas
                ref={canvasMural}
                width={(12*largo)+13}
                height={(8*largo)+9}
                onClick={handleChange}
            />
        <button
            type="button"
            onClick={ () => limpiaMuralBtn() } 
        >Limpiar mural</button>
        </div>
    );
});
 
export default Murales;