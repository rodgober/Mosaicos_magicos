import React, {useEffect, useContext } from 'react';
import salaContext from '../context/salas/salaContext'

const Mosaico = React.forwardRef((props, ref) => {

    const salaContexto = useContext(salaContext);
    const { alto, largo } = salaContexto;

    const col = ['red', 'yellow', 'green', 'aqua', 'blue', 'fuchsia', 'gray', 'orange', 'black', 'white'];
    let {figura, variante, color, pintar, setPintar, setFigura, setVariante} = props;

    

    useEffect(e => {
        if(pintar){
            const canvasRef = ref;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.lineWidth = 2;
            ctx.lineCap = 'butt';
            ctx.fill('nonzero');
            ctx.fillStyle = col[color-21];
            ctx.strokeStyle = col[color-21];

            ctx.beginPath();

            switch (figura) {
                case 1:
                    fig1(ctx);//Circulo
                    break;
                case 2:
                    fig2(ctx);//Cuadrado
                    break;
                case 3:
                    fig3(ctx);//Triangulo
                    break;
                case 4:
                    fig4(ctx);//Rombo
                    break;
                case 5:
                    fig5(ctx);//Hexagono
                    break;
                case 6:
                    fig6(ctx);//Linea
                    break;
                default:
                    fig1(ctx);//Circulo
                    break;
            }
            superRelleno(ctx);//la peor función de mi vida :()
          //  ctx.stroke();
            setPintar(false);
            setFigura(0);
            setVariante(0);
            return;
        }        
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
        <div>
            <canvas
                ref={ref}
                width={alto}
                height={largo}
            />
        </div>
     );
});
 
export default Mosaico;