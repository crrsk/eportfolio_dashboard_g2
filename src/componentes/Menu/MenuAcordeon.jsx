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

    const roles=useRoles()
    function generarRoles(){
        return roles.lista.roles.map(generarSumario)

    } 
    function generarSumario(rol){
        return <Accordion><Summary rol={rol}></Summary>{generarDetails(rol)}</Accordion>
    }
    function generarDetails(rol){
            if (rol=="docente"){
                
               return modulosImpartidos.lista.lista.map((a)=>{<Details ruta={ruta} nombre={a.nombre}></Details>}) 
            }else if(rol=="estudiante"){
                return modulosMatriculados.lista.lista.map((a)=><Details nombre={a.nombre}></Details>)
            }else if(rol=="administrador"){
                return admin.map((a)=><Details ruta={a.ruta} nombre={a.nombre}></Details>)
            }
        
    }
   
    console.log(modulosImpartidos)
    return (        <>
            {generarRoles()}
        
        </>
    )
}

export default MenuAcordeon