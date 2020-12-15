import React from 'react';
const logo = require('./images/LogoMM.png');

const Header = () => {
    const handleChange = e => {
        console.log('Seleciono sala');
    }
    return ( 
        <header className="header">
            <div className="header-contenedor">
                    <div className="logo">
                        <img
                            src={logo}
                            onClick={handleChange}
                        />
                    </div>

                    <nav className="menu">
                        <button
                            type="button"
                            onClick={handleChange}
                            className="presionado"
                            disabled="true"
                        >Mosaicos  
                        </button>
                        <button
                            type="button"
                            onClick={handleChange}
                            className="myButton"
                        >Murales  
                        </button>
                        <button
                            type="button"
                            onClick={handleChange}
                            className="myButton"
                        >Collages  
                        </button>
                    </nav>
                    <div className="configuracion">
                        <button
                            type="button"
                            onClick={handleChange}
                            className="myButton"
                        >Configuración  
                        </button>
                    </div>                    
            </div>
        </header>
     );
}
 
export default Header;