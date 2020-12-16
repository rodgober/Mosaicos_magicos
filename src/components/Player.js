import React, { useEffect, useState } from 'react';
import styles from './Player.module.css';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      audio.loop = true;
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
    //<button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
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
 
export default Player;