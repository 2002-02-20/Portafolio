import React from 'react'
import './Cards.css'

export default function Cards({imgProyect,
    TituloProyecto,
    description,
    lenguajePrograma,
    iconLink,
    linkProject,
    iconLinkGit,
    linkProjectGit}) {
  return (

    <>

    <li>
    <div className="containerProjects">
    <img src={imgProyect} alt="" className='imgProject'/>
    <h3>{TituloProyecto}</h3>
    <p className='textOnCards'>{description}</p>
    <p className='textOnCards'>{lenguajePrograma}</p>
    <img src={iconLink} alt="" /><a href={linkProject}>Live Preview</a>
    <img src={iconLinkGit} alt="" /><a href={linkProjectGit}>Live Preview</a>
    </div>
    </li>

    </>
  )
}
