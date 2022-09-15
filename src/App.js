import './index.css';
import ContenedorLista from './components/contenedorLista/contenedorLista';
import React, {Fragment, useState} from "react";


function App() {

  const [lista, setLista] = useState([])

  const agregarTarea = () => {
    const tarea = document.getElementById("tarea")
    const prioridad = document.getElementById("prioridad")
    const id = Date.now()

    setLista([...lista, [tarea.value, prioridad.value, id]])
    tarea.value = ""
  }

  const eliminarTarea = (id) => {
      console.log(id)
      setLista(lista.filter((value) => value[2] !== id))

  };
  
  const editarTarea = (id, newValue) => {
    console.log(id)
    const edit = lista.filter((value) => value[2] == id)
    const editCategory = edit[0]
    // Obtengo valor

    console.log(editCategory[0])
    // setLista(push 

};
  
  return (
    
    <Fragment>
     
        <ContenedorLista 
        
          lista={lista} 
          agregar={agregarTarea}
          eliminar={eliminarTarea}
          editar={editarTarea}
        /> 

    </Fragment>
  );
}

export default App;
