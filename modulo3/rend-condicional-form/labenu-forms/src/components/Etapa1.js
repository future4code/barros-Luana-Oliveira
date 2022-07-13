import React from "react";
import {Inicio,} from "./styleEtapa1"


const Etapa1=()=>{





    return(

        <Inicio>
            <form>


                <h1>Dados gerais</h1>

                <label>Qual o seu nome?</label>
                <input type="text "></input>

                <label>Qual sua idade?</label>
                <input type="number"></input>

                <label>Qual seu email?:</label>
                <input type="text"></input>

                <div>
                    <label>Nivel escolaridade:</label>

                    <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                    </select>
                </div>

                <button>Próxima Etapa</button>

            </form>

        </Inicio>
    )
}

export default Etapa1; 