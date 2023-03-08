import {Link} from "react-router-dom";
import styles from './Nav.module.css'

function Nav({ activeTab, planets }) {
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