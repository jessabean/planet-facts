import {Link} from "react-router-dom";
import styles from './Nav.module.css'

function Nav({ activeTab, planets }) {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-main"]}>
      {
            planets.map(planet => 
              { const menuClasses = activeTab === planet
                ? `nav-link nav-link--${planet.toLowerCase()} active`
                : `nav-link nav-link--${planet.toLowerCase()}`
              
                return <li key={planet}>
                  <Link to={`/${planet.toLowerCase()}`} className={menuClasses}>{planet}</Link>
                </li>
              })
          }                                                    
      </ul>
    </nav>
  )
}

export default Nav;