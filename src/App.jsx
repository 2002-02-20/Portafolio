import { useState } from 'react'
/* import viteLogo from '/vite.svg' */
import './App.css'
import Navbar from './components/Navbar'
import Presentacion from './components/Presentacion'
import TechStack from './components/TechStack'
import Proyects from './components/Proyects'
import Footer from './Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Presentacion/>

    <TechStack/>
    
    <h2 className='text-indigo-900 text-5xl sm:px-10 md:justify-center md:flex py-8'>Projects</h2>
    <p className='sm:px-10 text-[32px] text-gray-400 md:justify-center md:flex py-6'>Things I’ve built so far</p>

    <ul className="containerProjectsUl">
    <Proyects/>
    </ul>

    <Footer/>
    </>
  )
}

export default App
