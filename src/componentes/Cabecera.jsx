import { useContext } from "react"
import TokenContext from "../contexto/TokenContext"
function Cabecera(props) {
 
  const token=useContext(TokenContext)

  return (
    <>
      <header>
            <h1>HEADER</h1>
            <p>{props.usuario}</p>
            <p>{token}</p> 
      </header>
    </>
  )
}
//probamos que el contexto del token funciona reproducionedolo en el header
export default Cabecera