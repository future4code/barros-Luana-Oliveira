import React from "react";
import {useNavigate} from "react-router-dom"


function CreateTripPage(){
    const navigate=useNavigate();

    const lastPage = () => {
        navigate(-1)
      }
    return(
        <>
        <p>CreateTrip</p>

        <button>Criar</button>
        <button onClick={lastPage}>Voltar</button>
        </>
    )

}


export default CreateTripPage