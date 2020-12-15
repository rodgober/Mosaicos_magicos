import React from 'react';
import Juegayaprende from './components/Juegayaprende';
import SalaState from './context/salas/salaState'

function App() {
  return (
    <SalaState>
      <Juegayaprende>

      </Juegayaprende>
    </SalaState>
  );
}

export default App;
