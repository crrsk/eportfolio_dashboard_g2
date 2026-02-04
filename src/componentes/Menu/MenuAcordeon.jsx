import Accordion from '@mui/material/Accordion';

import useRoles from '../../hooks/useRoles';
import Summary from './Summary';
import Details from './Details';
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculados'
import opcionesMenu from '../../mocks/mock-administrador'
function MenuAcordeon() {
    
    const admin=opcionesMenu.administrador
    const modulosImpartidos=useMisModulosImpartidos()
    const modulosMatriculados=useMisModulosMatriculados()
    console.log("modulos",modulosImpartidos)
    const roles=useRoles()
    function generarRoles(){
        console.log(roles)
        if(roles.buscando && Array.isArray(roles.lista)){
            
        return  roles.lista.data?.map(generarSumario)
        }

    } 

    function generarSumario(rol){
        return <Accordion><Summary key={rol.id} rol={rol}></Summary>{generarDetails(rol.nombre)}</Accordion>
    }
    function generarDetails(rol){
            if (rol=="docente"){      
               return modulosImpartidos.lista.data.map((a)=><Details ruta={'/funcionalidaddocente/'+a.id} nombre={a.nombre}></Details>) 
            }else if(rol=="estudiante"){
                return modulosMatriculados.lista.data.map((a)=><Details ruta={'/funcionalidadestudiante/'+a.id} nombre={a.nombre}></Details>)
            }else if(rol=="administrador"){
                return admin.map((a)=><Details ruta={a.ruta} nombre={a.nombre}></Details>)
            }
        
    }
   
    return (        <>
            {generarRoles()}
        
        </>
    )
}

export default MenuAcordeon