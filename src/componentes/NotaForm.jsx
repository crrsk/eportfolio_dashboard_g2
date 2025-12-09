import { useState } from "react"
import "../NotaForm.css"

function NotaForm(){
    const [importancia,setImportancia]=useState("importante")


    return(
         
        <form action="" className="nota-form">
         <label htmlFor="">Contenido</label>
         <input type="text" />
         <label htmlFor="">Fecha</label>
         <input type="date" name="" id="" />
         <label htmlFor="">
            <input className="radios" type="radio"  name="importante" value="importante" checked={importancia==="importante"} onChange={(e)=>setImportancia(e.target.value)}/>Importante
            <input className="radios" type="radio" name="importante" value="no-importante" checked={importancia==="no-importante"} onChange={(e)=>setImportancia(e.target.value)}/>No importante 
         </label>
         

        </form>
    )
}

export default NotaForm