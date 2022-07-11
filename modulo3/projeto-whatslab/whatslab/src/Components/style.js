import styled from 'styled-components'

export const Header1 = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
        height: 100%;
    }
`

export const Main = styled.main`
    display: flex;
    height: 85vh;
    aside{
        background-color: #FFA500;
        width: 10%;
    }
    section{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:end;
    }
`
export const Footer = styled.footer`
    height: 5vh;
    background-color: gray;
    margin: 0;
    
    p{
        margin: 0;
        text-align: center;
    }
`

export const FormMsg = styled.form`
        display: flex;
        align-items: center;
        height: 70px;
        gap: 30px;
        margin-bottom: 10px;
        label{
            display: flex;
            gap: 10px;
        }
` 