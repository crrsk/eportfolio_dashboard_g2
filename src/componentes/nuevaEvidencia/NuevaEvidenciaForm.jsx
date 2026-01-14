import { useContext } from "react"
import UserContext from "../../contexto/UserContext"
import { useForm } from "react-hook-form"
import "./Evidencias.css"
import { TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import SendIcon from '@mui/icons-material/Send';
function NuevaEvidenciaForm(props) {
    const user=useContext(UserContext)
    const FORMINICIAL=
        {
            tarea_id:props.TAREA.id,
            estudiante_id:user,
            url: "",
            descripcion: "",
            estado_validacion: "pendiente"
        }
    const{register,reset,handleSubmit,watch,formState:{errors}}=useForm({defaultValues:FORMINICIAL})

   const manejarForm= handleSubmit((ra)=>{
        props.anadirEvidencia(ra)
        reset(FORMINICIAL)
    }
    ) 
    return (
        <>
            <form action="" onSubmit={manejarForm}>
               
                <TextField type="text" required variant="outlined" label="URL" fullWidth={true}
                {...register("url",{pattern:{
                        value:/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
                        message:"Ingrese una url valida"
                }})} helperText={errors.url?.message}/><br />
                <br />
                <TextField type="text" required variant="outlined" label="Observaciones" multiline minRows={5} fullWidth={true} {...register("descripcion")}/><br />
                <br />
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Button type="submit" variant="contained" endIcon={<SendIcon></SendIcon>}>AÑADIR EVIDENCIA</Button>
                </Box>
            </form>
        </>
    )
}

export default NuevaEvidenciaForm