import React, { Fragment } from 'react';
import styles from './About.module.css';

const About = () => {
    return ( 
        <Fragment>
            <div className={`${styles.con_creditos}`}>
                <div>
                    <h1>Conceptualización</h1>
                    <h2>Enrique Calderón Alzati</h2>
                </div>

                <div>
                    <h1>Desarrollo de software</h1>
                    <h2>Rodrigo González Bernardino</h2>
                </div>

                <div>
                    <h1>Diseño</h1>
                    <h2>Firelei Calderón Macías</h2>
                </div>
            </div>
        </Fragment>
     );
}
 
export default About;