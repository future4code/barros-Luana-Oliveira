import React from "react";
import {useNavigate} from "react-router-dom"


function AdminHomePage (){
    const navigate = useNavigate();


    const newTrips =()=>{
        navigate("/admin/trips/create")
    }
    const listaViagens=()=>{
        navigate("/admin/trips/list")
    }
    const lastPage = () => {
        navigate(-1)
      }
    return(
        <>
        <p>Admin control</p>

        <button onClick={newTrips}>Criar Viagens</button>
        <button onClick={listaViagens}>Viagens existentes</button>
        <button >Deletar Viagens</button>
        <button onClick={lastPage}>Voltar</button>
        </>
    )
}


export  default AdminHomePage; 