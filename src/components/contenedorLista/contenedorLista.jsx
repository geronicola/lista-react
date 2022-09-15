
import Title from "./titles/title"
import SubTitle from "./titles/subTitle"
import AlertMessage from "./alertMessage";
import Option from "./option";
import OptionDisabled from "./optionDisabled";

const ContenedorLista = ({lista, agregar, eliminar, editar }) => {
    return (
        <main>
            <Title text="Lista de Tareas!" /> 

            <form action="">
                <input id="tarea" placeholder="Escriba una tarea" name="tarea" type="text"/>
                <select name="prioridad" id="prioridad" defaultValue={'DEFAULT'}>
                    <OptionDisabled textOption={"Prioridades"} />
                    <Option valueOption={"prioridad-baja"} textOption={"Baja"} />
                    <Option valueOption={"prioridad-media"} textOption={"Media"}/>
                    <Option valueOption={"prioridad-alta"}textOption={"Alta"} />
                </select>
                <button id="agregar" onClick = {(e) => {e.preventDefault(); agregar()}}> Agregar! </button>
            </form>
                
            <SubTitle text={"Tareas!"}/>

            <AlertMessage idMessage={"mensaje-lista-vacia"} alertText={"Parece que no hay nada por aqui!"} />

            <ul id="lista-tareas">
                {lista.map((item, key) => {
                    return (
                            <div className="flex-around" key={key}> 
                         
                                <li className={item[1]}> {item[0]}</li>   
                                <div className="div-iconos"> 
                                    <img src="/editar.png" alt="icono editar"  
                                        onClick = {(e) => {e.preventDefault(); editar(item[0], item[1], item[2])}} />
                                    <img src="/eliminar.png" alt="icono eliminar" 
                                        onClick = {(e) => {e.preventDefault(); eliminar(item[2])}}/>
                                </div> 
                            </div>
                    )})
                } 
            </ul>
        </main>
    )}


export default ContenedorLista;