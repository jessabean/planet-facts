import { useState } from "react";
import styles from './Nav.module.css'

interface Props {
  activeTab: string,
  planets: Array<string>
}

function Nav({ activeTab, planets }: Props) {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-main"]}>
        {
          planets.map(planet => <li key={planet} className={activeTab === planet ? 'active' : ''}>{planet}</li>)
        }                                                    
      </ul>
    </nav>
  )
}

export default Nav;