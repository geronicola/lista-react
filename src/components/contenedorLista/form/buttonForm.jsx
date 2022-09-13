
const ButtonForm = ({idButton, textButton, agregar }) =>{  

    return(
        
        <button id={idButton}
        onClick = {
            (e) => {
                e.preventDefault();
                agregar()
            }}
            > 
        {textButton} </button>
    )
}

export default ButtonForm;