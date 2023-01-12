import { useState } from "react";

interface Props {
  activeTab: string,
  planets: Array<string>
}

function Nav({activeTab, planets} : Props) {
  
  return (
    <nav>
      <ul>
        {
          planets.map(planet => <li key={planet} className={activeTab === planet ? 'active' : ''}>{planet}</li>)
        }                                                         
      </ul>
    </nav>
  )
}

export default Nav;