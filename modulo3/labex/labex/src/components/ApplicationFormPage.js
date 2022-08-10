import React from "react";
import {useNavigate} from "react-router-dom"

function ApplicationFormPage (){
    const navigate=useNavigate();

    const lastPage = () => {
        navigate(-1)
      }


    return(
        <>
        <p>Formulário</p>
        

        <input type= "text"placeholder="Nome:"></input>
        <input type="number" placeholder="Idade:"></input>
        <input placeholder="Email:"></input>
        <button >Inscreva-se</button>
        <button onClick={lastPage}>Voltar</button>

        </>
    )
}


export default ApplicationFormPage;