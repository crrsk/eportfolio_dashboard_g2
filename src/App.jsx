import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import SideBar from './componentes/SideBar'
import Main from './componentes/Main'
import TokenContext from './contexto/TokenContext'
import UserContext from './contexto/UserContext'
import NuevaEvidencia from './componentes/nuevaEvidencia/NuevaEvidencia'
import MenuAcordeon from './componentes/Menu/MenuAcordeon'
import FuncionalidadDocente from './paginas/FuncionalidadDocente'
import { Route, Routes } from 'react-router-dom'
import FuncionalidadEstudiante from './paginas/FuncionalidadEstudiante'
function App() {

 const usuario="Victor"
 const token="dada78wda7w"
 const menu="menu"
 const[user,setUser]=useState(usuario)

  return (
    <>
    <TokenContext value={token}>
      <div className='container-fluid'>
        <div className="row">

          <div className='col-12 cabecera'>
            <Cabecera usuario={user}/>
          </div>

      <UserContext value={user}>    
         <div className='col-3 sideBar'>
            <SideBar menu={menu}/>
            <MenuAcordeon></MenuAcordeon>
          </div>
          <div className='col-9 main'>
            <Main token={token} />
            <Routes>
              <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante></FuncionalidadEstudiante>}/>
              <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente></FuncionalidadDocente>}/>
            </Routes>
            
          </div>
      </UserContext>  
  
        </div>
      
      </div>
    </TokenContext>

    </>
  )
}

export default App
