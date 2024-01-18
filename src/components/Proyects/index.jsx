import { useEffect, useState } from "react";
import React  from 'react'
import Cards from './Cards'

export default function Proyects() {

  const [users, setUsers] = useState([]);


  async function getData() {
    const fetchData = await fetch("stack.json");

    const datajson = await fetchData.json();

     setUsers(datajson); 

  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    
    {users &&
          users.map((user) => (

    <Cards
    key={user.id}
    imgProyect={user.imgProyect}
    TituloProyecto={user.TituloProyecto}
    description={user.description}
    lenguajePrograma={user.lenguajePrograma}
    iconLink={user.iconLink}
    linkProject={user.linkProject}
    iconLinkGit={user.iconLinkGit}
    linkProjectGit={user.linkProjectGit}
    
    />
    ))}
    </>
  )
}
