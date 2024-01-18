import { useState } from 'react'
/* import viteLogo from '/vite.svg' */
import './App.css'
import Navbar from './components/Navbar'
import Presentacion from './components/Presentacion'
import TechStack from './components/TechStack'
import Proyects from './components/Proyects'
function App() {

  return (
    <>
    <Navbar/>
    <Presentacion/>

    <TechStack/>
    
    <h2>Projects</h2>
    <p className='textDownProjects'>Things I’ve built so far</p>

    <ul className="containerProjectsUl">
    <Proyects/>
    </ul>
    </>
  )
}

export default App
