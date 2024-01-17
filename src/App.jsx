import { useState } from 'react'
/* import viteLogo from '/vite.svg' */
import './App.css'
import Navbar from './components/Navbar'
import Presentacion from './components/Presentacion'
import TechStack from './components/TechStack'
function App() {

  return (
    <>
    <Navbar/>
    <Presentacion/>

    <TechStack/>
    </>
  )
}

export default App
