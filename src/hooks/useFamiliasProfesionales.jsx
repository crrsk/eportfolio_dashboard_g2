import { useEffect, useState } from "react"
import getFamiliasProfesionales from "../servicios/FamiliasProfesionales/getFamiliasProfesionales"

function useFamiliasProfesionales(){

    const [lista,setLista]=useState([])
    const [buscando,setBuscando]=useState(false)
    
    function obtenerFamilias(){
        setBuscando(true)
        getFamiliasProfesionales().then((famililas)=>{
            setLista(famililas)
            setBuscando(false)
        })
    }
    useEffect(obtenerFamilias,[])
    return {lista,buscando}
}

export default useFamiliasProfesionales