import React from "react";
import ButtonForm from "./buttonForm";
import DifferentOption from "./differentOption";

const Form = ({idInput, placeholderInput}) => {
    return (
        <form action="">
            <input id={idInput} placeholder={placeholderInput} name={idInput} type="text"/> 
            <select name="prioridad" id="prioridad">
                <DifferentOption 
                    valueOption={"prioridad-baja"}
                    textOption={"Baja"}
                />
                <DifferentOption 
                    valueOption={"prioridad-media"}
                    textOption={"Media"}
                />
                <DifferentOption 
                    valueOption={"prioridad-alta"}
                    textOption={"Alta"}
                />

            </select>

           <ButtonForm
                idButton={"agregar"}
                textButton={"Agregar!"}
                
           />
      </form>

    )
}
/*
<form action="javascript:void(0);">
<input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea">
<select name="prioridad" id="prioridad">
  <option value="" disabled selected>Prioridad</option>
  <option value="prioridad-baja">baja</option>
  <option value="prioridad-media">media</option>
  <option value="prioridad-alta">alta</option>
</select>
<button id="agregar">Agregar!</button>
</form>

*/

export default Form;