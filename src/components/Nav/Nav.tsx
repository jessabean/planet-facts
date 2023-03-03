import { useState } from "react";
import './Nav.css'

interface Props {
  activeTab: string,
  planets: Array<string>
}

function Nav({ activeTab, planets }: Props) {

  return (
    <nav className="nav">
      <ul className="nav-main">
        {
          planets.map(planet => <li key={planet} className={activeTab === planet ? 'active' : ''}>{planet}</li>)
        }                                                         
      </ul>
    </nav>
  )
}

export default Nav;