
import { useState } from "react"

function Botonera(props){
   const[cuenta,setState]=useState(props.valor)

    function incrementarCuenta(){
        setState(cuenta+1)
    }
    function elegirColor(){
        if (cuenta%2==0){
            return "verde"
        }else{
            return "rojo"
        }
    }
    return(
        <>
            <button className={elegirColor()} onClick={incrementarCuenta}>{props.nombre}-{cuenta}</button>
        </>
    )
}

export default Botonera