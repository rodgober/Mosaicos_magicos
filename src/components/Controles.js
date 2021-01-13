import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ReplayIcon from '@material-ui/icons/Replay';
import styles from './Controles.module.css';

const Controles = () => {
    return ( 
        <div className={`${styles.cont_controles}`}  >
            <Button 
                style={{minWidth: '24px'}}
            >
                <StopIcon
                    style={{ minWidth: '24px', fontSize: 35 }}
                ></StopIcon>
            </Button>
            <Button
                style={{minWidth: '24px'}}
            >
                <PlayArrowIcon
                    style={{ minWidth: '24px', fontSize: 35  }}
                ></PlayArrowIcon>
            </Button>
            <Button
                style={{minWidth: '24px'}}
            >
                <SkipNextIcon
                    style={{ minWidth: '24px', fontSize: 35  }}
                ></SkipNextIcon>
            </Button>
            <Button
                style={{minWidth: '24px'}}
            >
                <ReplayIcon
                    
                    style={{ minWidth: '24px', fontSize: 35 }}
                ></ReplayIcon>
            </Button>
        </div>
     );
}
 
export default Controles;