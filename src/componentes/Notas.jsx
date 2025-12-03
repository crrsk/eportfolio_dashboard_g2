import Nota from "./Nota"


function Notas (props){

    function mostrarNota(nota){
        return <Nota nota={nota}></Nota>
    }

    return(
        <>
           <ul>{props.notas.map(mostrarNota)}</ul> 
        </>
    )
}

export default Notas