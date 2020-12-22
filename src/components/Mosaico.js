import React, {useEffect, useContext } from 'react';
import salaContext from '../context/salas/salaContext'
import styles from './Mosaico.module.css';
import PropTypes from 'prop-types';

const Mosaico = React.forwardRef((props, ref) => {

    const copia = React.createRef(); //Canvas a utilizar en caso de deshacer la última acción

    const salaContexto = useContext(salaContext);
    const { alto, largo } = salaContexto; //alto y largo del mosaico

    const col = ['red', 'yellow', 'green', 'aqua', 'blue', 'fuchsia', 'gray', 'orange', 'black', 'white'];
    let {figura, variante, color, pintar, setPintar, setFigura, setVariante, deshacer, setDeshacer } = props;

    useEffect(e => {
        const canvasRef = ref;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, largo, alto);  //Limpia el mosaico de arriba para crear un nuevo mosaic
        ctx.fillStyle = 'white'; //Estblece color de relleno blanco
        ctx.strokeStyle = 'white'; //Estblece color de relleno blanco
        ctx.fillRect(0, 0, largo, alto);

        const canvasCopia = copia;
        const canvas2 = canvasCopia.current;
        const ctx2 = canvas2.getContext('2d');
        ctx2.clearRect(0, 0, largo, alto);  //Limpia el mosaico de arriba para crear un nuevo mosaic
        ctx2.fillStyle = 'white'; //Estblece color de relleno blanco
        ctx2.strokeStyle = 'white'; //Estblece color de relleno blanco
        ctx2.fillRect(0, 0, largo, alto);
        // eslint-disable-next-line
    }, [alto,largo]);

    useEffect(e => {
        if (!deshacer){
            const canvasRef = ref; //Mosaico
            const canvasMos = canvasRef.current; //Mosaico
            const ctx1 = canvasMos.getContext('2d'); //Mosaico
            const canvasCopia = copia; //Mosaico oculto Deshacer
            const canvasDes = canvasCopia.current; //Mosaico oculto Deshacer
            const ctx2 = canvasDes.getContext('2d'); //Mosaico oculto Deshacer

            ctx1.clearRect(0, 0, largo, alto);  //Limpia el mosaico de arriba para crear un nuevo mosaic
            ctx1.fillStyle = 'white'; //Estblece color de relleno blanco
            ctx1.strokeStyle = 'white'; //Estblece color de relleno blanco
            ctx1.fillRect(0, 0, largo, alto);
            ctx1.drawImage(canvasDes, 0, 0);

            ctx1.beginPath();
            ctx2.beginPath();
        }
        // eslint-disable-next-line
    }, [deshacer]);

    useEffect(e => {
        if(pintar){
            const canvasRef = ref; //Mosaico
            const canvasMos = canvasRef.current; //Mosaico
            const ctx1 = canvasMos.getContext('2d'); //Mosaico
            //Respaldar lo que tien para el Deshacer
            const canvasCopia = copia; //Mosaico oculto Deshacer
            const canvasDes = canvasCopia.current; //Mosaico oculto Deshacer
            const ctx2 = canvasDes.getContext('2d'); //Mosaico oculto Deshacer
            ctx2.drawImage(canvasMos, 0, 0); //Copia el contenido del mosaico

            ctx1.lineWidth = 2;
            ctx1.lineCap = 'butt';
            ctx1.fill('nonzero');
            ctx1.fillStyle = col[color-21];
            ctx1.strokeStyle = col[color-21];
            ctx1.beginPath();
            
            //Ya hizo copia de lo que tenía, se puede proceder a estampar
            switch (figura) {
                case 1:
                    fig1(ctx1);//Circulo
                    break;
                case 2:
                    fig2(ctx1);//Cuadrado
                    break;
                case 3:
                    fig3(ctx1);//Triangulo
                    break;
                case 4:
                    fig4(ctx1);//Rombo
                    break;
                case 5:
                    fig5(ctx1);//Hexagono
                    break;
                case 6:
                    fig6(ctx1);//Linea
                    break;
                default:
                    fig1(ctx1);//Circulo
                    break;
            }
            superRelleno(ctx1);//la peor función de mi vida :()
          //  ctx.stroke();
            setPintar(false);
            setFigura(0);
            setVariante(0);
            setDeshacer(true);
            return;
        }        
        // eslint-disable-next-line
    }, [pintar]);

    function superRelleno(ctx){
        for (let index = 0; index < 30; index++) {
            ctx.fill();   
        }
    }

    //Manda las coordenadas para imprimir un círculo dependiendo su variante
    function fig1(ctx){
        switch (variante) {
            case 11:
                circulo(ctx, (largo / 2), (alto / 2), (alto / 2), 0, 2 * Math.PI);
                break;
            case 12:
                circulo(ctx, (largo / 2), (alto / 2), (alto / 4), 0, 2 * Math.PI);
                break;
            case 13:
                circulo(ctx, 0, (alto / 2), (alto / 2), 1.5 * Math.PI, 0.5 * Math.PI);
                break;
            case 14:
                circulo(ctx, largo, (alto / 2), (alto / 2), 0.5 * Math.PI, 1.5 * Math.PI);
                break;
            case 15:
                circulo(ctx, (alto / 2), 0, (alto / 2), 0, Math.PI);
                break;
            case 16:
                circulo(ctx, (alto / 2), largo, (alto / 2), Math.PI, 0);
                break;
            case 17:
                circulo(ctx, 0, alto, (alto / 2), 1.5 * Math.PI, 0);
                break;
            case 18:
                circulo(ctx, 0, 0, (alto / 2), 0, 0.5 * Math.PI);
                break;
            case 19:
                circulo(ctx, largo, 0, (alto / 2), 0.5 * Math.PI, Math.PI);
                break;
            case 20:
                circulo(ctx, largo, largo, (alto / 2), Math.PI, 1.5 * Math.PI);
                break;
            default:
                circulo(ctx, (largo / 2), (alto / 2), (alto / 2), 0, 2 * Math.PI);
                break;
        }
    }

    //Dibuja un arco con centro en X, Y, con un radio r inicia en i y termina en f
    function circulo(ctx, x, y, r, i, f){
        ctx.moveTo(x, y);
        ctx.arc(x, y, r, i,f);
        ctx.moveTo(x, y);
    }

    //Manda las coordenadas para imprimir un RECTANGULO dependiendo su variante
    function fig2(ctx) {
        switch (variante) {
            case 11:
                rectangulo(ctx, 0, 0, alto, largo);//X, Y, largo, alto
                break;
            case 12:
                rectangulo(ctx, largo / 4, alto / 4, largo / 2, alto / 2 );
                break;
            case 13:
                rectangulo(ctx, 0, 0, largo / 2, alto);
                break;
            case 14:
                rectangulo(ctx, largo / 2, 0, largo / 2, alto);
                break;
            case 15:
                rectangulo(ctx, 0, 0, largo, alto / 2);
                break;
            case 16:
                rectangulo(ctx, 0, alto / 2, largo, alto / 2);
                break;
            case 17:
                rectangulo(ctx, 0, largo / 2, largo / 2, alto / 2);
                break;
            case 18:
                rectangulo(ctx, 0, 0, largo / 2, alto / 2);
                break;
            case 19:
                rectangulo(ctx, alto / 2, 0, largo / 2, alto / 2);
                break;
            case 20:
                rectangulo(ctx, alto / 2, largo / 2, largo / 2, alto / 2);
                break;
            default:
                rectangulo(ctx, 0, 0, alto, largo);
                break;
        }
    }

    //Dibuja un rectángulo, toma X, Y y el largo y alto
    function rectangulo (ctx, x, y, largo, alto) {
        ctx.fillRect(x, y, largo, alto); //X, Y, largo, alto
    }

    //Manda las coordenadas para imprimir un TRINAGULO dependiendo su variante
    function fig3(ctx) {
        switch (variante) {
            case 11:
                triangulo(ctx, [largo / 2, 0], [largo, alto], [0, alto]);//X, Y, largo, alto
                break;
            case 12:
                triangulo(ctx, [0,0],[largo, 0],[alto / 2, largo]);
                break;
            case 13:
                triangulo(ctx, [0,0],[largo / 2, alto / 2], [0, largo]);
                break;
            case 14:
                triangulo(ctx, [largo, 0],[largo, alto],[largo / 2, alto / 2]);
                break;
            case 15:
                triangulo(ctx, [0,0], [largo, 0], [largo / 2, alto / 2]);
                break;
            case 16:
                triangulo(ctx, [largo / 2, alto / 2], [largo, alto], [0, alto]);
                break;
            case 17:
                triangulo(ctx, [0,0], [largo, alto], [0, alto]);
                break;
            case 18:
                triangulo(ctx, [0,0], [largo, 0], [largo, alto]);
                break;
            case 19:
                triangulo(ctx, [largo, 0], [largo, alto], [0, alto]);
                break;
            case 20:
                triangulo(ctx, [0,0],[largo, 0],[0, alto]);
                break;
            default:
                triangulo(ctx, [largo / 2, 0], [largo, alto], [0, alto]);
                break;
        }
    }

    //Funcion que pitan triángulos, recibe 3 vertices
    function triangulo (ctx, vertice1, vertice2, vertice3) {
        ctx.moveTo(vertice1[0], vertice1[1]);
        ctx.lineTo(vertice2[0], vertice2[1]);
        ctx.lineTo(vertice3[0], vertice3[1]);
        ctx.lineTo(vertice1[0], vertice1[1]);

    }

    //Manda las coordenadas para imprimir un ROMBO dependiendo su variante
    function fig4(ctx) {
        switch (variante) {
            case 11:
                rombo(ctx, [largo / 2, 0],[largo, alto / 2],[largo / 2, alto],[0, alto / 2]);
                break;
            case 12:
                rombo(ctx,  [largo / 2, alto / 4],[(largo / 4)*3, alto / 2],[largo / 2, (alto / 4 )*3],[largo / 4, alto / 2]);
                break;
            default:
                rombo(ctx, [largo / 2, 0],[largo, alto / 2],[largo / 2, alto],[0, alto / 2]);
                break;
        }
    }

    //Funcion que pitan ROMBOS, recibe 4 vertices
    function rombo (ctx, vertice1, vertice2, vertice3, vertice4) {
        ctx.moveTo(vertice1[0], vertice1[1]);
        ctx.lineTo(vertice2[0], vertice2[1]);
        ctx.lineTo(vertice3[0], vertice3[1]);
        ctx.lineTo(vertice4[0], vertice4[1]);
        ctx.lineTo(vertice1[0], vertice1[1]);
    }

    //Manda las coordenadas para imprimir un HEXÁGONO dependiendo su variante
    function fig5(ctx) {
        switch (variante) {
            case 11:
                hexa(ctx, [largo / 4, 0],[(largo / 4) * 3, 0],[largo, alto / 2],[(largo / 4) * 3, alto],[largo / 4, alto],[0, alto / 2]);
                break;
            case 12:
                hexa(ctx,   [largo / 2, 0],[largo, alto / 4],[largo, (alto / 4)*3],[largo / 2, alto],[0, (alto / 4)*3],[0, alto / 4]);
                break;
            default:    
                hexa(ctx, [largo / 4, 0],[(largo / 4) * 3, 0],[largo, alto / 2],[(largo / 4) * 3, alto],[largo / 4, alto],[0, alto / 2]);
                break;
        }
    }

    //Funcion que pitan HEXAGONOS, recibe 6 vertices
    function hexa (ctx, vertice1, vertice2, vertice3, vertice4, vertice5, vertice6) {
        ctx.moveTo(vertice1[0], vertice1[1]);
        ctx.lineTo(vertice2[0], vertice2[1]);
        ctx.lineTo(vertice3[0], vertice3[1]);
        ctx.lineTo(vertice4[0], vertice4[1]);
        ctx.lineTo(vertice5[0], vertice5[1]);
        ctx.lineTo(vertice6[0], vertice6[1]);
        ctx.lineTo(vertice1[0], vertice1[1]);
    }

    //Manda las coordenadas para imprimir una LINEA dependiendo su variante
    function fig6(ctx) {
        switch (variante) {
            case 11:
                linea(ctx, [largo / 2, 0],[largo / 2, alto]);
                break;
            case 12:
                linea(ctx, [0, alto / 2],[largo, alto / 2]);
                break;
            case 13:
                linea(ctx, [0, alto],[largo, 0]);
                break;
            case 14:
                linea(ctx, [0, 0],[largo, alto]);
                break;
            default:    
                linea(ctx, [largo / 2, 0],[largo / 2, alto]);
                break;
        }
        ctx.stroke();
    }

    //Funcion que pinta Linea
    function linea (ctx, pto1, pto2) {
        ctx.moveTo(pto1[0], pto1[1]);
        ctx.lineTo(pto2[0], pto2[1]);
    }    

    return ( 
        <div className={`${styles.cont_mosaico}`} >
            <canvas
                ref={ref}
                width='40px'
                height='40px'
                className={`${styles.canvas_mosaico}`}
            />
            <canvas
                ref={copia}
                width='40px'
                height='40px'
                className={`${styles.canvas_oculto}`}                
            />
        </div>
     );
});

Mosaico.protoTypes = {
    figura: PropTypes.number.isRequired,
    variante: PropTypes.number.isRequired,
    color: PropTypes.number.isRequired,
    pintar: PropTypes.bool.isRequired,
    deshacer: PropTypes.bool.isRequired,
    setPintar: PropTypes.func.isRequired,
    setFigura: PropTypes.func.isRequired,
    setVariante: PropTypes.func.isRequired,
    setDeshacer: PropTypes.func.isRequired,
    ref: PropTypes.node.isRequired
  }
 
export default Mosaico;