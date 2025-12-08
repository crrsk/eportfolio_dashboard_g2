import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Botonera.css'
import Botonera from './componentes/componentesRefuerzo/Botonera'

function App() {
  let estado = 0
  const botonera = [{
    texto: "LeftUp",
    valor: 0
  },
  {
    texto: "RightUp",
    valor: 0
  },
  {
    texto: "LeftDown",
    valor: 0
  },
  {
    texto: "RighDown",
    valor: 0
  }]

 
  return (

    <div className='botonera'>
       
        {botonera.map((a)=><Botonera nombre={a.texto} valor={a.valor}></Botonera> )}
      
      

    </div>



  )
}

export default App
