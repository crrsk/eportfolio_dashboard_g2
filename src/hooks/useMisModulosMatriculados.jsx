import { useContext, useState } from "react"
import matriculados from '../mocks/mock-matriculados'
import UserContext from "../contexto/UserContext"
function MisModulosMatriculados(){
    
    const user=useContext(UserContext)
    const[buscando,setBuscando]=useState(false)
    const[lista,setLista]=useState(matriculados[user])
    return{buscando,lista}
}
export default MisModulosMatriculados