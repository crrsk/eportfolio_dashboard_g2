function Nota(props){
    return(
        <>
           <h3> <li>{props.nota.contenido}</li></h3>
             <p>{props.nota.fecha}</p>
        </>
    )
}
export default Nota