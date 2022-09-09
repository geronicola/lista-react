import React from "react";

const ButtonForm = ({idButton, textButton}) =>{
    return(
        <button id={idButton}> {textButton} </button>
    )
}

export default ButtonForm;