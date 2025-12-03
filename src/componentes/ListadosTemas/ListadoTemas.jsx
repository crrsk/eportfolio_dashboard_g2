import Tema from "../Tema"
const listadoTemas=(props)=>{

   function crearTema(miTema){
    return <Tema misTemas={miTema}></Tema> 
   }
   
    return(
      <> 
        <ul>
             {props.todosMisTemas.map(crearTema)}
        </ul>
        

    
        
      </>
       
           
    )
}
export default listadoTemas