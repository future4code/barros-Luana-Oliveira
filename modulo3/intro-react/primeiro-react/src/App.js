import logo from './logo.svg';
import './App.css';
import foto from './fotoPerfil.png';

function App() {
  function mensagem(){
    alert("Boa noite!")
  }  
  return (
    <div className="App">

      <header className="App-header">
        <h2>Olá, eu sou a Luana!</h2>
        <img src={foto} className="fotoPerfil" alt="Foto de perfil"/>
        <p>
          Esse é o meu primeiro site React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
        
        <img src={logo} className="App-logo" alt="logo" />

        </a>
        <button onClick={mensagem}>Clique aqui.</button>
      </header>
    </div>
  );
}

export default App;
