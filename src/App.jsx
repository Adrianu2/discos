import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Seccion1 } from './components/seccion1/Seccion1'
import {Banner} from './components/Banner'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <h1>Only Boggie & Funk</h1>
      <Banner/>
      <h3>Cd Nuevos y Usados</h3>
    
      
      <Seccion1/>
    </>
  )
}

export default App
