import './index.css';
import ContenedorLista from './components/contenedorLista/contenedorLista';
import React, {Fragment, useState} from "react";


function App() {
  let alta = [];
  let media = [];
  let baja = [];

  const [lista, setLista] = useState([])
  const [order, setOrder] = useState([alta, media, baja])

  const agregarTarea = (idOrden) => {

    const tarea = document.getElementById("tarea")
    const prioridad = document.getElementById("prioridad")
    const id = Date.now()
    // Lista SIN ORDENAR
    setLista([...lista, [tarea.value, prioridad.value, id]])

    console.log("NUEVO RENDER")
    // Agrego los valores en una posicion segun su Orden - alta[0], media[1], baja[2]
    if(prioridad.value == "prioridad-alta") {
      console.log(order)
      order[0].push([tarea.value, prioridad.value, id])
      setOrder(order)
    } else if (prioridad.value == "prioridad-media") {
      order[1].push([tarea.value, prioridad.value, id])
      setOrder(order)
    } else {
      order[2].push([tarea.value, prioridad.value, id])
      setOrder(order)
    }
  //console.log(lista)
    return tarea.value = ""
  }
  


  const eliminarTarea = (id) => {
     
      setLista(lista.filter((value) => value[2] !== id))
  };


  const editarTarea = (id, newValue) => {
    const tarea = document.getElementById("tarea")
    const prioridad = document.getElementById("prioridad")

    const edit = lista.filter((value) => value[2] == id)
    //const editCategory = edit[0]


    const editTareas = edit[0]

    tarea.value = editTareas[0];
    prioridad.text = editTareas[1]
    prioridad.value = editTareas[1]

    eliminarTarea(editTareas[2])
    console.log(lista)
};

const eliminarTodo = (e) => {
  lista.forEach(element => {
   setLista ([])
  });
  console.log(lista)
}



  
  return (
    
    <Fragment>
     
        <ContenedorLista 
        
          lista={lista} 
          order={order}
          orderLista={order}
          agregar={agregarTarea}
          eliminar={eliminarTarea}
          editar={editarTarea}
          eliminarTodo={eliminarTodo}
    
        /> 

    </Fragment>
  );
}

export default App;
