import React, { useEffect, useState } from 'react';
import styles from './Player.module.css';
import PropTypes from 'prop-types';



const Player = ({ url }) => {
    
    const useAudio = url => {
      const [audio] = useState(new Audio(url));
      const [playing, setPlaying] = useState(false);
      const toggle = () => setPlaying(!playing);
    
      useEffect(() => {
          playing ? audio.play() : audio.pause();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        },[playing]);
    
      useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        audio.loop = true;
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      return [playing, toggle];
    };
    const [playing, toggle] = useAudio(url);
    return ( 
        <div>
            <label 
              className={`${styles.label_checkbox}`}  
              >
                Audio
                <input
                    name="audio"
                    type="checkbox"
                    checked={playing}
                    onChange={toggle} />
                    <span className={`${styles.checkmark}`} ></span>
            </label>
        </div>


     );
}

Player.protoTypes = {
  url: PropTypes.string.isRequired
}
 
export default Player;