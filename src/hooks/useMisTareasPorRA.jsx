import { useEffect, useState } from "react"
import getTareasPorRA from "../servicios/Tareas/getTareasPorRA"

function useMisTareasPorRA(){
    
    const [buscando,setBuscando]=useState(false)
    const [lista,setLista]=useState([])
    
    function obtenerTareasPorRA(){
        setBuscando(true)
        getTareasPorRA().then((tareas)=>{
            console.log(tareas," hook")
            setLista(tareas)
            setBuscando(false)
        })
    }
    useEffect(obtenerTareasPorRA,[])
    return{buscando,lista}
}

export default useMisTareasPorRA