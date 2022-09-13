import React, {Fragment} from "react";


const ShowList = ({lista, }) => {

    return(
        <Fragment>
            <ul id="lista-tareas">
                    {lista.map((item, key) => {
                         return  <li className={item[1]} key={key}> {item[0]}</li>
                    })} 
            </ul>
        </Fragment>
    )   

}

export default ShowList;