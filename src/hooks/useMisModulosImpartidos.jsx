import { useContext, useEffect, useState } from 'react'
import impartidos from '../mocks/mock-impartidos'
import UserContext from '../contexto/UserContext'
import getModulosImpartidos from '../servicios/ModulosImpartidos/getModulosImpartidos'

function useMisModulosImpartidos(){

    const user=useContext(UserContext)
    const[buscando,setBuscando]=useState(false)
    const[lista,setLista]=useState([])
    
    function obtenerModulosImpartidos(){
        setBuscando(true)
        getModulosImpartidos().then((modulos)=>{
            setLista(modulos)
            setBuscando(false)
        })
    }
    useEffect(obtenerModulosImpartidos,[])
    return{buscando,lista}
}
export  default useMisModulosImpartidos