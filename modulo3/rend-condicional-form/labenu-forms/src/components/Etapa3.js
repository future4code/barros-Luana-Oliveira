import React from "react";
import {Form} from "./styleEtapa2"



const Etapa3=()=>{

    return(
        <Form>
        <label>Por que você não terminou ou não fez uma graduação?</label>
        <input type="text"></input>

        <div>
        <label>Tem algum curso complementar?</label>

            <select>
                <option>Curso técnico</option>
                <option>Cursos de linguagens</option>
                <option>Não fiz curso complementar</option>
            </select>
            
            <button>Próxima Etapa</button>

        </div>
        </Form>
    )
}




export default Etapa3; 