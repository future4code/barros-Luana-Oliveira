import React from "react";
import {useNavigate} from "react-router-dom"


function TripDetails(){

    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
      }
    return(
        <>
        <p>Adm</p>
        
        <button onClick={lastPage}>Voltar</button>
        </>
    )


}


export default TripDetails; 