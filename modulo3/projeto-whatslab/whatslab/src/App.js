import React from 'react';
import './App.js';
import './Components/style';
import './Components/cabecalho'
import './Components/TelaPrincipal'
import './Components/rodape'
import { Cabecalho } from './Components/cabecalho'
import Telaprincipal from './Components/TelaPrincipal'
import { Rodape } from './Components/rodape'



function App() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Telaprincipal></Telaprincipal>
      <Rodape></Rodape>
    </div>
  );
}

export default App;