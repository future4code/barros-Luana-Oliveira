import React from "react";
import { FormMsg } from "./style"

export function Inputs(Props) {
  return (
    <FormMsg>
      <label>
        Remetente:
        <input
          type="text"
          id="remetente"
          value={Props.remetente}
          onChange={Props.handleRemetente}
        ></input>
      </label>
      <label>
        Msg:
        <textarea
          rows="3"
          value={Props.msg}
          onChange={Props.handleMsg}
        ></textarea>
      </label>
      <button onClick={Props.enviar}>Enviar</button>
    </FormMsg>
  );
}