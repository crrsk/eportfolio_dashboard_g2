import { useState } from "react"
import notas from '../mocks/mock-notas'
import Notas from "./Notas"


function Boton(props){

    const[estado,setEstado]= useState(+props.estado)

    function cambiarContenido(){
        if(estado==0){
            setEstado(estado+1)
        }else if(estado==1){
            setEstado(estado-1)
        }
    }

    function imprimeNotas(){
        if(estado==0){
            return notas
        }else{
            let notasImportantes
            notasImportantes=notas.filter((a)=>a.importante==true)
            return notasImportantes
        }
    }
    function cambiarContenidoBton(){
        if(estado==0){
            return  "Mostrar importantes"
        }else{
            return "Mostrar todos"
        }
    }
    return(
        <>
            <button onClick={cambiarContenido}>{cambiarContenidoBton()}</button>
            <Notas  notas={imprimeNotas()}></Notas>
        </>
    )
}

export default Boton