import styled from "styled-components"

export const Inicio=styled.div`
    
    justify-content: center
    margin-top:20px;
    width: 50vw;
    border-radius: 1vw;
    background-color: #D5D5D5;
    padding-bottom:40px;
    text-align: center;
    h1{
        margin:10px;
        color: #785964;
    }
    form{
    display: flex;
    flex-direction: column;
    }
    label{
        color: #454545;
        font-size: 20px;
        font-weight: bold;
       
    }
    input{
        margin: 10px;
        border-radius: 15px;
        font-size: 20px;
        padding: 5px 15px;
        
    }
    button{
        font-size: large;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 20px;
        
    }
    button:hover{
    background-color: #785964;
    color: white;
}
`