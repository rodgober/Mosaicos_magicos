import React, {Fragment, useState, useContext } from 'react';
import styles from './Sala.module.css';
import Mosaico from './Mosaico';
import Figuras from './Figuras';
import Variantes from './Variantes';
import Colores from './Colores';
import Amosaico from './Amosaico';
import salaContext from '../context/salas/salaContext'
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import PropTypes from 'prop-types';

const Horno = React.forwardRef((props, ref) => {

    const salaContexto = useContext(salaContext);
    const { alto, largo, separacion, almacen, setAlmacen, setGuardarAlmacen } = salaContexto;

    const [figura, setFigura] = useState(0); //Establece el tipo de figura seleccionada
    const [variante, setVariante] = useState(0); //Establece la variante de la figura seleccionada
    const [color, setColor] = useState(0);   //Establece el color de la figura seleccionada
    const [pintar, setPintar] = useState(false);
    const [estampar, setEstampar] = useState(false); //Indica si el mosaico está listo para Estampar
    const [animacion, setAnimacion] = useState(false); //Indica que debe iniciar y finalizar la animacion
    const [deshacer, setDeshacer] = useState(false); //Indica si es posible deshacer la acción del mosaico

    const canvasMos = React.createRef(); // Crea la referencia del mosaico que pinta arriba en el horno
    const canvasTrans = React.createRef(); //Crea la referencia del mosaico que se mueve en el horno

    const canvasAlmacenes = ref; //Toma la referencia del almacen

    const handleChange = e => { 
       
        if (almacen < 20){
            const canvas1 = canvasMos.current;  //Asigna la referencia del mosaico de arriba del horno (tablero)
            const canvas2 = canvasTrans.current;//Asigna la refrencia del mosaico que se mueve
            const ctxM1 = canvas1.getContext('2d');
            const ctxM2 = canvas2.getContext('2d');
            

            ctxM2.drawImage(canvas1, 0, 0); //Dibuja el mosaico que se mueve

            ///////////////////////////////////////////////////
            //     Copiar al almacen
            ///////////////////////////////////////////////////
            const canvas4 = canvasAlmacenes.current; //
            const ctxAlmacenes = canvas4.getContext('2d'); //
            var imgData = ctxM2.getImageData(0, 0, largo, alto); //Obtiene la imagen  del canvas del mosaico en TRANSICION    
            var x =  ((separacion + largo + separacion)*almacen)+separacion; // Calcula x en el cual se estampará el mosaico en el almacen

            ctxAlmacenes.putImageData(imgData, x, 0 + separacion); //Estampa el mosaico en el almacén //

            setAlmacen(almacen + 1); //Incrementa el almacen
            setGuardarAlmacen(true);
            setEstampar(false); //Indica que ya no  puede volver a estampar hasta completar nuevamente el ciclo (figura, variante, color)
            setAnimacion(true);
        //  setDeshacer(false);
            ctxM1.clearRect(0, 0, largo, alto);  //Limpia el mosaico de arriba para crear un nuevo mosaico
            ctxM1.fillStyle = 'white'; //Estblece color de relleno blanco
            ctxM1.fillRect(0, 0, largo, alto);  //Pinta un cuadro blanco del tamaño del canvas para que no sea transparente      alert("Ya debe estar limpio");
        }else{
            alert('Debes eliminar mosaicos para seguir fabricando nuevos');
        }
    }

    const undo = e => {
        setDeshacer(false);
    }

    return ( 
        <Fragment>
            <div className={`${styles.primera_seccion}`} >
                <div className={`${styles.cont_mosaico}`} >
                    <div className={`${styles.mosaico}`} >
                        <Mosaico
                            figura={figura}
                            variante={variante}
                            color={color}
                            pintar={pintar}
                            deshacer={deshacer}
                            setPintar={setPintar}
                            setFigura={setFigura}
                            setVariante={setVariante}
                            setDeshacer={setDeshacer}                
                            ref={canvasMos}
                        />
                    </div>
                </div>
                
                <div className={`${styles.tablero}`} >
                    <Figuras
                        figura={figura}
                        setFigura={setFigura}
                    />
                   <Variantes
                        figura={figura}
                        variante={variante}
                        setVariante={setVariante}
                    /> 
                    <Colores
                        figura={figura}
                        variante={variante}
                        color={color}
                        setColor={setColor}
                        setPintar={setPintar}
                        setEstampar={setEstampar}
                        setFigura={setFigura}
                 /> 
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={e => undo()}
                        disabled={!deshacer}
                    >
                        <ReplayIcon></ReplayIcon>
                    </Button>
                </div> 
            </div>
            <div className={`${styles.div_estampar}`}  >
                <button
                    className={`${styles.btn_estampar}`}
                    type="button"
                    onClick={e => handleChange()}
                    disabled={!estampar}
                >Estampar  
                 </button>
            </div>
            <div className={`${styles.segunda_seccion}`} >
                <Amosaico
                    animacion={animacion}
                    setAnimacion={setAnimacion}
                    ref={canvasTrans}
                />
            </div>
        </Fragment>

     );
});

Horno.protoTypes = {
    ref: PropTypes.node.isRequired 
}
 
export default Horno;