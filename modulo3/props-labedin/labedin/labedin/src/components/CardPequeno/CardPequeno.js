import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="infosCard-container">
            <img src={props.logo} />
            <p><b>{props.label}</b> {props.info}</p>
        </div>
    )
}

export default CardPequeno; 