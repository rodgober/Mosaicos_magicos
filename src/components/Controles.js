import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ReplayIcon from '@material-ui/icons/Replay';

const Controles = () => {
    return ( 
        <div>
            <Button>
                <StopIcon
                    style={{ fontSize: 35 }}
                ></StopIcon>
            </Button>
            <Button>
                <PlayArrowIcon
                    style={{ fontSize: 35 }}
                ></PlayArrowIcon>
            </Button>
            <Button>
                <SkipNextIcon
                    style={{ fontSize: 35 }}
                ></SkipNextIcon>
            </Button>
            <Button>
                <ReplayIcon
                    style={{ fontSize: 35 }}
                ></ReplayIcon>
            </Button>
        </div>
     );
}
 
export default Controles;