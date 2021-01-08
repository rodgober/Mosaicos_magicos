import React, { useContext } from 'react';
import programaContext from '../context/programa/programaContext';

import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';

const Controlmanual = () => {
    const instruccionesContext = useContext(programaContext);
    const { xx, setXX, yy, setYY, setDireccion } = instruccionesContext;

    const left = e => { 
        setXX(xx - 40);
        setDireccion(3);
    }

    const right = e => { 
        setXX(xx + 40)
        setDireccion(1);
    }

    const up = e => { 
        setYY(yy - 40)
        setDireccion(4);
    }

    const down = e => { 
        setYY(yy + 40)
        setDireccion(2);
    }
    return ( 
        <div>
            <Button
                type="button"
                onClick={e => left()}
            >
                <ArrowBackIcon
                    style={{ fontSize: 35 }}
                ></ArrowBackIcon>
            </Button>
            <Button
                type="button"
                onClick={e => right()}
            >
                <ArrowForwardIcon
                    style={{ fontSize: 35 }}
                ></ArrowForwardIcon>
            </Button>
            <Button
                type="button"
                onClick={e => down()}
            >
                <ArrowDownwardIcon
                    style={{ fontSize: 35 }}
                ></ArrowDownwardIcon>
            </Button>
            <Button
                type="button"
                onClick={e => up()}
            >
                <ArrowUpwardIcon
                    style={{ fontSize: 35 }}
                ></ArrowUpwardIcon>
            </Button>
            <Button>
                <PublishIcon
                    style={{ fontSize: 35 }}
                ></PublishIcon>
            </Button>
            <Button>
                <GetAppIcon
                    style={{ fontSize: 35 }}
                ></GetAppIcon>
            </Button>
        </div>
     );
}
 
export default Controlmanual;