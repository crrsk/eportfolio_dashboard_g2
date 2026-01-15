//Import componentes
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
//Import MOCKS
import tareasRA from "../../mocks/mock-tareasRA"
import { useState } from "react"
import { Tab } from "@mui/material"

function NuevaEvidencia() {
    
    const [raSelect,setRA]=useState({})
    const [TAREAS,setTareas] = useState(tareasRA.lista)

    function manejarEvidencias(ra){
        setRA(ra)
    }

    function anadirEvidencia(ra){
        setTareas([...TAREAS,ra])
    }

   


       
        return (
            <>
                <div className="evidencias">
                <SelectorTareaRA tareas={TAREAS} manejarEvidencia={manejarEvidencias}></SelectorTareaRA>
                <p></p>
                <NuevaEvidenciaForm TAREA={raSelect} anadirEvidencia={anadirEvidencia}></NuevaEvidenciaForm>
                </div>
               {console.log(TAREAS)}
           </>
        )
    }

    export default NuevaEvidencia