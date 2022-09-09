import React from "react";

const ShowList = ({idOption, classShow, textoInput}) => {
    return(
        <ul>
             <li id={idOption} className={classShow}> {textoInput}</li>
        </ul>
    )   
}

export default ShowList;