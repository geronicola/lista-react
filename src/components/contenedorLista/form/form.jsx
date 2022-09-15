import React from "react";
import ButtonForm from "./buttonForm";
import Option from "./option";
import OptionDisabled from "./optionDisabled";




const Form = ({idInput, placeholderInput, agregar }) => {

    return (
        <form action="">
            <input 
            id={idInput} 
            placeholder={placeholderInput} 
            name={idInput} 
            type="text"
     
            />

            <select name="prioridad" id="prioridad" defaultValue={'DEFAULT'}>
                <OptionDisabled  
                    textOption={"Prioridades"}
                    
                    />
                <Option 
                    valueOption={"prioridad-baja"}
                    textOption={"Baja"}
                />
                <Option 
                    valueOption={"prioridad-media"}
                    textOption={"Media"}
                />
                <Option 
                    valueOption={"prioridad-alta"}
                    textOption={"Alta"}
                />

            </select>

           <ButtonForm
                agregar={agregar}
                idButton={"agregar"}
                textButton={"Agregar!"}   
           />
      </form>

    )
}

export default Form;