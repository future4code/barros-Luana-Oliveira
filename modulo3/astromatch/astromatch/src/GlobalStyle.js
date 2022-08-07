import { createGlobalStyle } from "styled-components";
import Background from './components/fundo/amor.jpg'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-image: url(${Background});
        font-family: 'Ubuntu', sans-serif;
    }
`
export default GlobalStyle;