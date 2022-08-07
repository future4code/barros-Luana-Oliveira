import React, { useEffect, useState} from 'react'
import axios from "axios";
import GlobalStyle from './GlobalStyle';
import Card from './components/Card';
import Matchs from './components/Matchs';

function App() {
  let conteudo;
  const [boolean, setBoolean] = useState(false)
  const [qtdeMatchs, setQtdeMatchs] = useState([])
  const [contador, setContador] = useState(qtdeMatchs.length)


function matchs () {
  const aluno = 'luana-oliveira-barros'
  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`).then((response) => {
    setQtdeMatchs(response.data.matchs)
    setContador(qtdeMatchs.length)
}).catch(() => {
    setQtdeMatchs([])
})
}

useEffect(()=>{
  matchs()
})

//Renderização condicional
  function mostraMatchs () {
    setBoolean(!boolean)
  }

  if(boolean){
    conteudo = <Matchs
                  voltar={mostraMatchs}
                />
  } else {
    conteudo = <Card
      mostraMatchs = {mostraMatchs}
      quantidadeMatchs={contador}
    />
  }

  return (
    <div>
      <GlobalStyle />
      {conteudo}
    </div>
  );
}

export default App;