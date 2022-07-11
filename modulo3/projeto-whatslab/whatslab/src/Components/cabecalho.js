import react from 'react'
import App from '../App'
import {Header1} from './style'
import logolabzap from './img/logo-lab.png'

export function Cabecalho() {
    return (
        <div>
            <Header1>
                <img src={logolabzap}/>
                <h1>LabZap</h1>
            </Header1>
        </div>
    )
}

