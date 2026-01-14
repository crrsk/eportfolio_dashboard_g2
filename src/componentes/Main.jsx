import { useContext } from "react"
import UserContext from "../contexto/UserContext"

function Main(props) {
 
  const user=useContext(UserContext)

  return (
    <main>
        <h1>MAIN</h1>
        <p>{props.token}</p>
        <p>{user}</p>
    </main>
    
  )
}

export default Main