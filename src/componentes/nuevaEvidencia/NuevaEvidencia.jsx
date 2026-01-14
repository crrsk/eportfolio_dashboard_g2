//Import componentes
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
//Import MOCKS
import tareasRA from "../../mocks/mock-tareasRA"
import { useState } from "react"
import { Tab } from "@mui/material"

function NuevaEvidencia() {
    
    const [raSelect,setRA]=useState('')
    const [TAREAS,setTareas] = useState(tareasRA)

    function manejarEvidencias(ra){
        setRA(ra)
        return ra
    }

    function anadirEvidencia(ra){
        setTareas([...TAREAS,ra])
    }

   


       
        return (
            <>
                <div className="evidencias">
                <SelectorTareaRA tareas={TAREAS} manejarEvidencia={manejarEvidencias}></SelectorTareaRA>
                <p></p>
                <NuevaEvidenciaForm ra={raSelect} anadirEvidencia={anadirEvidencia}></NuevaEvidenciaForm>
                </div>

           </>
        )
    }

    export default NuevaEvidencia