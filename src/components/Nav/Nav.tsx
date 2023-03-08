import { useState } from "react";
import {Link} from "react-router-dom";
import styles from './Nav.module.css'

interface Props {
  activeTab?: string,
  planets: Array<string>
}

function Nav({ activeTab, planets }: Props) {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-main"]}>
        {
          planets.map(planet => <li key={planet} className={activeTab === planet ? 'active' : ''}>
            <Link to={`/${planet.toLowerCase()}`}>{planet}</Link>
          </li>)
        }                                                    
      </ul>
    </nav>
  )
}

export default Nav;