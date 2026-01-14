//Import componentes
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
//Import MOCKS
import tareasRA from "../../mocks/mock-tareasRA"

function NuevaEvidencia() {

    function manejarEvidencias(ra){
        console.log(ra)
        console.log("Desde nueva eviddencia")
    }

     const TAREAS = tareasRA


       
        return (
            <>
                <SelectorTareaRA tareas={TAREAS} manejarEvidencia={manejarEvidencias}></SelectorTareaRA>
            </>
        )
    }

    export default NuevaEvidencia