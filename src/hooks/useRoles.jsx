import { useContext, useEffect, useState } from "react";

import UserContext from "../contexto/UserContext";
import getRoles from "../servicios/Roles/getRoles";

function useRoles(){
   
    const user=useContext(UserContext)
    
    const [buscando,setBuscando]=useState(false);
    const [lista,setLista]=useState([])
    
    function obtenerRoles(){
        setBuscando(true)
        getRoles().then((roles)=>{
            setLista(roles)
            setBuscando(false)
        })
    }

    useEffect(obtenerRoles,[])

    return {buscando,lista}
}

export default useRoles;