import './index.css';
import ContenedorLista from './components/contenedorLista/contenedorLista';
import React, {Fragment, useState} from "react";


function App() {

  const [lista, setLista] = useState([])

  const agregarTarea = () => {
    const tarea = document.getElementById("tarea")
    const prioridad = document.getElementById("prioridad")
    setLista([...lista, [tarea.value, prioridad.value]])
    tarea.value = ""
  }


  return (
    
    <Fragment>
     
        <ContenedorLista 
        
         lista={lista} 
         agregar={agregarTarea}
        /> 

    </Fragment>
  );
}

export default App;
