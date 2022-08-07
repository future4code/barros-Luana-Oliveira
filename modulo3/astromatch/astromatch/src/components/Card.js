import { React, useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, BtnZerar } from "../Style";

function Card(props) {
  const [perfil, setPerfil] = useState([]);
  const [foto, setFoto] = useState(undefined);
  const [id, setId] = useState(undefined);

  const [animacao, setAnimacao] = useState("");

  const aluno = "luana-oliveira-barros";

  useEffect(() => {
    profileChoose();
  }, []);

  
  function profileChoose() {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`
      )
      .then((response) => {
        if (response.data.profile === null) {
          axios
            .put(
              `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
            )
            .then(() => {
              alert(
                "Atenção: Você visualizou todos os perfis disponíveis no momento! A lista será reiniciada..."
              );
              window.location.reload(false);
            });
        } else {
          setPerfil(response.data.profile);
          setFoto(response.data.profile.photo);
          setId(response.data.profile.id);
          setAnimacao("");
        }
      })
      .catch((error) => {
        alert("Houve alguem problema ao carregar os perfis :( ... Atualize a página e tente novamente...");
      });
  }

  
  function darLike() {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        {
          id: id,
          choice: true,
        }
      )
      .then(() => {
        profileChoose();
        setAnimacao("like");
      })
      .catch(() => {
        alert("Algo deu errado :(");
      });
  }

  
  function darDeslike() {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        {
          id: id,
          choice: false,
        }
      )
      .then(() => {
        profileChoose();
        setAnimacao("deslike");
      })
      .catch(() => {
        alert("Algo deu errado :(");
      });
  }

  
  function reiniciar() {
    if (window.confirm("Deseja resetar a lista de matches?")) {
      axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
      ).then(()=>{
        window.location.reload(false);
      }).catch(()=>{
        alert("Houve algum erro :( ... Atualize a página e tente novamente...")
      })
    }
  }

  return (
    <>
      <CardContainer back={foto} animacao={animacao}>
        <div>
          <h1>AstroMatch</h1>
          <button onClick={props.mostraMatches}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M23.7 23.7q1.3-1.6 1.925-3.3.625-1.7.625-3.95t-.625-3.95Q25 10.8 23.7 9.2q3.8-.85 6.675 1.15t2.875 6.1q0 4.1-2.875 6.1T23.7 23.7ZM34.5 40v-4.7q0-2.55-1.3-4.75t-4.5-3.7q8.65 1.1 11.825 3.2 3.175 2.1 3.175 5.25V40ZM40 25.55v-5h-5v-3h5v-5h3v5h5v3h-5v5Zm-24.25-1.6q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM0 40v-4.7q0-1.75.925-3.175Q1.85 30.7 3.4 30q3.6-1.6 6.425-2.3 2.825-.7 5.925-.7 3.1 0 5.9.7 2.8.7 6.4 2.3 1.55.7 2.5 2.125t.95 3.175V40Zm15.75-19.05q1.95 0 3.225-1.275Q20.25 18.4 20.25 16.45q0-1.95-1.275-3.225Q17.7 11.95 15.75 11.95q-1.95 0-3.225 1.275Q11.25 14.5 11.25 16.45q0 1.95 1.275 3.225Q13.8 20.95 15.75 20.95ZM3 37h25.5v-1.7q0-.8-.4-1.5t-1.25-1.1Q23.4 31.1 21 30.55 18.6 30 15.75 30t-5.225.55Q8.15 31.1 4.6 32.7q-.75.35-1.175 1.075Q3 34.5 3 35.3Zm12.75-20.55Zm0 20.55Z" />
            </svg>
            <span>{props.quantidadeMatches}</span>
          </button>
        </div>
        <section>
          <span />
          <div>
            <p>
              {perfil.name}, {perfil.age}
            </p>
            <p>{perfil.bio}</p>
          </div>
        </section>
        <section>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="M5 31.6q-1.15 0-2.075-.925Q2 29.75 2 28.6v-4.1q0-.55.125-1.275.125-.725.375-1.275l5.8-13.4q.45-1.05 1.475-1.8Q10.8 6 11.95 6H35.3v25.6L21.4 46l-1.65-1.3q-.55-.4-.725-.9-.175-.5-.175-1.15v-.5L21.1 31.6Zm33.3 0V6H44v25.6Z"
              onClick={darDeslike}
            />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="M36.5 34v-6.5H30v-3h6.5V18h3v6.5H46v3h-6.5V34ZM22 42l-6.35-5.7q-3.6-3.25-6.175-5.8-2.575-2.55-4.25-4.8-1.675-2.25-2.45-4.35Q2 19.25 2 16.95q0-4.7 3.15-7.825T13 6q2.6 0 4.95 1.075T22 10.15q1.7-2 4.05-3.075Q28.4 6 31 6q4.25 0 7.125 2.575T41.7 14.6q-.9-.35-1.8-.525-.9-.175-1.75-.175-5.05 0-8.6 3.525T26 26q0 2.6 1.05 4.925Q28.1 33.25 30 34.9q-.95.85-2.475 2.175Q26 38.4 24.9 39.4Z"
              onClick={darLike}
            />
          </svg>
        </section>
      </CardContainer>
      <BtnZerar onClick={reiniciar}>Zerar Matches</BtnZerar>
    </>
  );
}

export default Card;