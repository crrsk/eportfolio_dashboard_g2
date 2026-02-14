//Import componentes
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
//Import MOCKS
import { useState } from "react"
import { Tab } from "@mui/material"
import useMisTareasPorRA from "../../hooks/useMisTareasPorRA"

function NuevaEvidencia() {
    
    const [raSelect,setRA]=useState({})
    const TAREAS = useMisTareasPorRA()
    const [evidencias,setEvidencias]=useState([])
    
    function manejarEvidencias(ra){
        setRA(ra)
    }

    function anadirEvidencia(ra){
        setEvidencias([...evidencias,ra])
        console.log(evidencias)
    }

   


       
        return (
            <>
                <div className="evidencias">
                <SelectorTareaRA tareas={TAREAS.lista} manejarEvidencia={manejarEvidencias}></SelectorTareaRA>
                <p></p>
                <NuevaEvidenciaForm TAREA={raSelect} anadirEvidencia={anadirEvidencia}></NuevaEvidenciaForm>
                </div>
               
           </>
        )
    }

    export default NuevaEvidencia