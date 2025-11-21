import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import SideBar from './componentes/SideBar'
import Main from './componentes/Main'

function App() {

 const usuario="Enrique"
 const token="dada78wda7w"
 const menu="menu"



  return (
    <>
      <div className='container-fluid'>
        <div className="row">

          <div className='col-12 cabecera'>
            <Cabecera usuario={usuario}/>
          </div>
         <div className='col-3 sideBar'>
            <SideBar menu={menu}/>
          </div>
          <div className='col-9 main'>
            <Main token={token} />
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
