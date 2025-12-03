import TotalEjercicios from "./TotalEjercicios"

function Tema(props){

    function mostrarParts(miTema){
      return <li><strong>{miTema.name}</strong>,{"Ejercicios"}:{miTema.exercises}</li>
    }

    return(
        <>
         <li>{props.misTemas.name}</li>            

            <ol>
                {props.misTemas.parts.map(mostrarParts)}
            </ol>
            
            <TotalEjercicios misTemas = {props.misTemas}></TotalEjercicios>
        
           
        </>
    )       
}

export default Tema