import { useContext, useEffect, useState } from "react"
import matriculados from '../mocks/mock-matriculados'
import UserContext from "../contexto/UserContext"
import getModulosMatriculados from "../servicios/ModulosMatriculados/getModulosMatriculados"
function MisModulosMatriculados(){
    
    const user=useContext(UserContext)
    const[buscando,setBuscando]=useState(false)
    const[lista,setLista]=useState([])


    function obtenerModulosMatriculados(){
        setBuscando(true)
        getModulosMatriculados().then((modulos)=>{
            setLista(modulos)
            setBuscando(false)
        })
    }

    useEffect(obtenerModulosMatriculados,[])
    return{buscando,lista}
}
export default MisModulosMatriculados