import React from "react";
import {useNavigate} from "react-router-dom"



function Home (){
    const navigate = useNavigate();

    const tripList = () => {
        navigate("/trips/list")
      }
    const tripAdm = () => {
        navigate("/login")
      }

    return(
        <>
        <p>Home </p>

        <button onClick={tripList}>Lista de Viagens</button>

        <button onClick={tripAdm}>Area Administrativa</button>
        </>
)}

export default Home; 