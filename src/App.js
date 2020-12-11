import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esto es una prueba.
        </p>
        <a
          className="App-link"
          href="https://rodgober.github.io/Mosaicos_magicos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mosaicos mágicos
        </a>
      </header>
    </div>
  );
}

export default App;
