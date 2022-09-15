import React, {Fragment} from "react";


const ShowList = ({lista, eliminar, editar}) => {

    return(
        <Fragment> 
            <ul id="lista-tareas">
                    {lista.map((item, key) => {
                         return (
                            <div className="flex-around" key={key}> 
                                <li className={item[1]}> {item[0]}</li>   
                                <div > 
                                    <img 
                                        src="/editar.png" 
                                        alt="icono editar"  
                                        onClick = {
                                            (e) => {
                                                e.preventDefault();
                                                editar(item[0], item[1], item[2])
                                            }}
                                        />
                                    <img 
                                        src="/eliminar.png" 
                                        alt="icono eliminar" 
    
                                        onClick = {
                                            (e) => {
                                                e.preventDefault();
                                                eliminar(item[2])
                                            }}
                                        />
 
                                </div> 
                              
                            </div>)
                         
                    })} 
            </ul>
        </Fragment>
    )   

}

export default ShowList;