import Form from "./form/form";
import Title from "./titles/title"
import SubTitle from "./titles/subTitle"
import AlertMessage from "./form/alertMessage";
import ShowList from "./showList/showList"



const ContenedorLista = ({lista, agregar, }) => {
    return (
        <main>
            <Title 
                // Paso una propiedad - {Hay logica presente}
                text="Lista de Tareas!">    
            </Title>

            <Form 
                lista={lista}
                agregar={agregar}
                idInput={"tarea"}
                name={"tarea"}
            />
                

            <SubTitle
                text={"Tareas!"}
            />
            <AlertMessage 
                idMessage={"mensaje-lista-vacia"}
                alertText={"Parece que no hay nada por aqui!"}
            />

            <ShowList
                lista={lista}  
            />
        </main>
        
    
    )
}


export default ContenedorLista;