import { useContext } from "react"
import UserContext from "../contexto/UserContext"
import { Route, Routes } from "react-router-dom"
import FuncionalidadEstudiante from "../paginas/FuncionalidadEstudiante"
import FuncionalidadDocente from "../paginas/FuncionalidadDocente"

function Main(props) {
 
  const user=useContext(UserContext)

  return (
    <main>
        <h1>MAIN</h1>
        <p>{props.token}</p>
        <p>{user}</p>
        <Routes>
            <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante></FuncionalidadEstudiante>}/>
            <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente></FuncionalidadDocente>}/>
        </Routes>
    </main>
    
  )
}

export default Main