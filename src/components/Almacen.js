import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Almacen = React.forwardRef((props,ref) => {

    const alto = props.alto;
    const largo = props.largo;
    const separacion =  props.separacion;
    const almacen = props.almacen;
    const setAlmacen = props.setAlmacen;

    const canvasRef = ref;

    const [mosSeleccionado, setmosSeleccionado] = useState(0);

    const handleChange = e => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top; // console.log("Coordinate x: " + x,"Coordinate y: " + y);
        if((y>0) && (y < alto) && (x > 0) && (x <(     almacen * (largo + separacion)         ) ) ){
            let numMos = 1 + Math.trunc(x / (largo + separacion));
            console.log('El valor de X es: ', x);
            console.log('x deve ser menor a: ', almacen * (largo + separacion) );

            if(mosSeleccionado !== numMos && mosSeleccionado < almacen){
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 3;
                ctx.strokeRect((separacion / 2)+((mosSeleccionado - 1) * (largo + separacion)), (separacion / 2), (largo + separacion), (alto + separacion)); // imprime el marco blanco
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.strokeRect((separacion / 2)+((numMos - 1) * (largo + separacion)), (separacion / 2), (largo + separacion), (alto + separacion));//Calcula el marco que indica que un mosaico ha sido seleccionado
                setmosSeleccionado(numMos);//Guarda el nuevo mosaico seleccionado
            }
            console.log('El mosaico clickeado es el ', numMos);
        }      
    }

    const eliminartodos = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setAlmacen(0);
    }

    const borrarMos = () => {
        console.log('esto sucede desde antes de dar clic');
        if (mosSeleccionado > 0 && almacen > 0){
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 3;
                ctx.strokeRect((separacion / 2)+((mosSeleccionado - 1) * (largo + separacion)), (separacion / 2), (largo + separacion), (alto + separacion)); // imprime el marco blanco
                ctx.strokeStyle = 'black';    

                var imgData = ctx.getImageData((separacion / 2)+((mosSeleccionado + 0) * (largo + separacion)), 0, 1000, canvas.height); //Obtiene la imagen  del canvas del mosaico en TRANSICION             
                ctx.putImageData(imgData, (separacion / 2)+((mosSeleccionado - 1) * (largo + separacion)), 0);

                setAlmacen(almacen -1);
                setmosSeleccionado(0);//Ya no hay mosaico seleccionado
                console.log(almacen);
        }
    }
   

    return (
        <div>
            <div className="container">
                <p>Almacen</p>
                <canvas
                    ref={ref}
                    id='canv'
                    width='2000'
                    height={separacion + largo + separacion}
                    onClick={handleChange}
                />
            </div>

            <div>
                <button
                    type="button"
                >Abrir</button>



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

Almacen.propTypes = {
    alto :      PropTypes.number.isRequired,
    largo:      PropTypes.number.isRequired,
    separacion: PropTypes.number.isRequired,
    almacen:    PropTypes.number.isRequired,
    setAlmacen: PropTypes.func.isRequired
}
 
export default Almacen;