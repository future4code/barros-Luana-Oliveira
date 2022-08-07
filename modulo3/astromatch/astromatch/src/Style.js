import styled from "styled-components"

export const CardContainer = styled.section`
    width: 70vh;
    max-width: 400px;
    min-height: 500px;
    max-height: 550px;
    border: 1px solid #DA2D49;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3px);
    div:nth-child(1){
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        h1{
            font-family: 'Dancing Script', cursive;
            font-size: 30px;
            color: #DA2D49;
            padding-right: 33%;
        }
        button{
            background-color: transparent;
            border: none;
            display: flex;
            align-items: center;
            svg{
                cursor: pointer;
                fill: #222222;
    
                &:hover{
                    fill: #DA2D49;
                }
            }
            span{
                background-color: #DA2D49;
                padding: 4px 7px;
                border-radius: 50%;
                margin-left: 3px;
                color: white;
            }
        }
    }
    section:nth-child(2){
        width: 85%;
        height: 400px;
        animation: ${props => {
            if (props.animacao === "like"){
                return "like 0.5s  0s"
            } else if (props.animacao === "deslike"){
                return "deslike 0.5s 0s"
            } else {
                return ""
            }
            }};
            @keyframes like {
                from{
                    transform: translate(0) rotate(0);
                    opacity: 1;
                }
                to {
                    transform: translate(200px) rotate(45deg);
                    opacity: 0;
                }
            }
            
            @keyframes deslike {
                from{
                    transform: translate(0) rotate(0);
                    opacity: 1;
                }
                to {
                    transform: translate(-200px) rotate(-45deg);
                    opacity: 0;
                }
            }
        span{
        background-image: url(${props => props.back});
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        -moz-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        -webkit-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        background-position: center;
        box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,0.5), inset 0px -136px 64px -11px rgba(38,38,38,0.5), inset 0px -136px 64px -11px rgba(38,38,38,0.5),     
        rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        width: 100%;
        min-height: 95%;
        max-height: 100%;
        display: block;
        }
    div{
        margin: -90px auto 0 auto;
        padding: 0 20px;
        p{
            color: white;
            font-size: 18px;
            text-shadow: 2px 2px #161B22;
        }
    }
    }
    section:nth-child(3){
        display: flex;
        width: 100%;
        justify-content: space-around;
        svg:nth-child(1){
            cursor: pointer;
            fill: #131313;
            &:hover{
                fill: red;
            }
        }
        svg:nth-child(2){
            cursor: pointer;
            fill: #131313;
            &:hover{
                fill: #DA2D49;
            }
        }
    }   
`

export const BtnZerar = styled.button`
    position: absolute;
    right: 1%;
    bottom: 15px;
    background: #FF416C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 120px;
    padding: 10px 15px;
    border-radius: 15px;
    color: white;
    border: transparent;
    cursor: pointer;
`

export const MatcheContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70vh;
    min-height: 550px;
    border: 1px solid black;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3px);
    border: 1px solid #DA2D49;
    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 30px;
        color: #DA2D49;
    }
    div {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    ul{
        width: 50%;
        
        li {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            p {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
        
    img{
        width: 90px;
        height: 90px;
        clip-path: circle(50%);
    }
    button{
        background: #FF416C;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        width: 120px;
        padding: 10px 15px;
        border-radius: 15px;
        color: white;
        border: transparent;
        cursor: pointer;
    }
`

export const Aviso = styled.p`
            font-size: 22px;
        text-align: center;
        padding: 100px 30px;
` 