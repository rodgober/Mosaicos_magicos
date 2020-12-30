import React, { useState, useContext, useEffect } from 'react';
import salaContext from '../context/salas/salaContext';
import styles from './Almacencollages.module.css';
import PropTypes from 'prop-types';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

const Almacencollages = React.forwardRef((props,ref) => {

    const refInput = React.createRef();
    const mural1 = React.createRef();
    const mural2 = React.createRef();
    const mural3 = React.createRef();
    const mural4 = React.createRef();
    const mural5 = React.createRef();
    const mural6 = React.createRef();
    const mural7 = React.createRef();
    const mural8 = React.createRef();
    const mural9 = React.createRef();
    const mural10 = React.createRef();

    const salaContexto = useContext(salaContext);
    const { almacenCollages, setAlmacenCollages} = salaContexto;
    const canvasRef = ref;
    const componentsMap = [ mural1, mural2, mural3, mural4, mural5, mural6, mural7, mural8, mural9, mural10 ];

    const [muralSeleccionado, setMuralSeleccionado] = useState(0);

    useEffect(() => {
        eliminartodos();
    }, [])

    useEffect (()=>{
        if (almacenCollages<=0){
            setAlmacenCollages(0);
            setMuralSeleccionado(0);
        }
    }, [almacenCollages]);


    const abrirAlmacen = e => {
        let canvas;
        switch (almacenCollages) {
            case 0:
                canvas = mural1.current;
                break;
            case 1:
                canvas = mural2.current;
                break;
            case 2:
                canvas = mural3.current;
                break;
            case 3:
                canvas = mural4.current;
                break;
            case 4:
                canvas = mural5.current;
                break;
            case 5:
                canvas = mural6.current;
                break;
            case 6:
                canvas = mural7.current;
                break;
            case 7:
                canvas = mural8.current;
                break;
            case 8:
                canvas = mural9.current;
                break;
            case 9:
                canvas = mural10.current;
                break;
            default:
                canvas = mural1.current;
                break;
        }
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
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            setAlmacenCollages(almacenCollages + 1);
        
        setMuralSeleccionado(0)
    }

    const handleChange = e => {
        if(parseInt(e.target.parentElement.id, 10) <= almacenCollages){
            setMuralSeleccionado(parseInt(e.target.parentElement.id, 10));
            const canvasAlm = e.currentTarget; //El current del Almacen
            const canvasSel = ref.current;       //El current del mosaico seleccionado oculto
            const ctxAlm = canvasAlm.getContext('2d');  //Crea el contexto donde tomará el mosaico seleccionado
            const ctxMuralSel = canvasSel.getContext('2d'); //Crea el contexto donde pintará el mosaico seleccionado
            var imgMural = ctxAlm.getImageData(0,0, canvasAlm.width-1, canvasAlm.height-1);//Toma el mosaico del almacen
            ctxMuralSel.putImageData(imgMural, 0, 0); //Estampa el mosaico en el Mural
        }
    }

    const eliminartodos = () => {
        let canv;
        let canvas;
        let ctx;
        for (let index = 0; index < 10; index++) {
            canv = componentsMap[index];
            canvas = canv.current;
            ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
        }
        setMuralSeleccionado(0);
        setAlmacenCollages(0);
    }

    const borrarMural = () => {
        if (muralSeleccionado > 0 && almacenCollages > 0){
            let canv1;
            let canv2;
            let canvas1;
            let canvas2;
            let ctx1;
            for (let index = muralSeleccionado; index < almacenCollages; index++) {
                canv1 = componentsMap[index - 1];
                canv2 = componentsMap[index];
                canvas1 = canv1.current;
                canvas2 = canv2.current;
                ctx1 = canvas1.getContext('2d');
                ctx1.drawImage(canvas2, 0, 0);
            }
            canv1 = componentsMap[almacenCollages - 1];
            canvas1 = canv1.current;
            ctx1 = canvas1.getContext('2d');
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            setAlmacenCollages(almacenCollages - 1 );
            setMuralSeleccionado(0);
        }
    }


    return ( 
        <div className={`${styles.tercera_seccion}`} >
            <div className={`${styles.contenedor_almacen_collages}`} >
                <div className={(1 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='1'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='11'
                            ref={mural1}
                            onClick={handleChange}
                        />
                </div>
                <div className={(2 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='2'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='12'
                            ref={mural2}
                            onClick={handleChange}
                        />
                </div>
                <div className={(3 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='3'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='13'
                            ref={mural3}
                            onClick={handleChange}
                        />
                </div>
                <div className={(4 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='4'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='14'
                            ref={mural4}
                            onClick={handleChange}
                        />
                </div>
                <div className={(5 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='5'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='15'
                            ref={mural5}
                            onClick={handleChange}
                        />
                </div>
                <div className={(6 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='6'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='16'
                            ref={mural6}
                            onClick={handleChange}
                        />
                </div>
                <div className={(7 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='7'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='17'
                            ref={mural7}
                            onClick={handleChange}
                        />
                </div>
                <div className={(8 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='8'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='18'
                            ref={mural8}
                            onClick={handleChange}
                        />
                </div>
                <div className={(9 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='9'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='19'
                            ref={mural9}
                            onClick={handleChange}
                        />
                </div>
                <div className={(10 === muralSeleccionado) ? `${styles.cont_mural_almacen_sel}` : `${styles.cont_mural_almacen}`}
                    id='10'>
                        <canvas className={`${styles.mural_collage}`}
                            width='493px'
                            height='329px'
                            id='20'
                            ref={mural10}
                            onClick={handleChange}
                        />
                </div>
            </div>

            <div>
                    <Button
                        component="label"
                    >
                        <input
                            type="file"
                            id="fileUpload"
                            style={{ display: "none" }}
                            onChange={abrirAlmacen}
                            ref={refInput}
                        />
                        <FolderOpenIcon
                            style={{ fontSize: 35 }}
                        ></FolderOpenIcon>
                    </Button>

                    <Button
                            type="button"
                            onClick={ () => borrarMural() }
                        >
                        <HighlightOffIcon
                            style={{ fontSize: 35 }}                    
                        ></HighlightOffIcon>
                    </Button>
    
                    <Button
                                type="button"
                                onClick={ () => eliminartodos() }
                            >
                        <DeleteOutlineIcon
                            style={{ fontSize: 35 }}
                        ></DeleteOutlineIcon>
                    </Button>

            </div>
            <canvas className={`${styles.mural_oculto}`}
                            width='493px'
                            height='329px'
                            id='21'
                            ref={ref}
            />
        </div>
     );
});

Almacencollages.protoTypes = {
    ref: PropTypes.node.isRequired 
}
 
export default Almacencollages;