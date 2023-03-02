import { useState } from "react";
import { Planet } from '../../types/planet.type'
import './PlanetPage.css';

interface Props {
  data: Planet
}

function PlanetPage({data} : Props) {
  
  return (
    <p>{data.name}</p>
    
  )
}

export default PlanetPage;