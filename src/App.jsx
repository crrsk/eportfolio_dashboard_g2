import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from './componentes/Boton'
import NotaForm from './componentes/NotaForm'

function App() {
  let estado=0

  return (
    
    <div>
      <h1>Notas</h1>
      <Boton estado={estado}></Boton>
      <NotaForm></NotaForm>
    </div>
      
      
    
  )
}

export default App
