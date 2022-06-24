import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <a href={props.link} target="blank"><img src={ props.imagem }/></a>
            <a href={props.link} target="blank"><p>{ props.texto }</p></a>
        </div>

    )
}

export default ImagemButton;