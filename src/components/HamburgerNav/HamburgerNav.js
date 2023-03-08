import { useState } from "react";
import {Link} from "react-router-dom";
import styles from './HamburgerNav.module.css'
import { ReactComponent as MenuIcon } from '../../assets/images/icon-hamburger.svg';


function HamburgerNav({ activeTab, planets }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuStyles = menuOpen
    ? `${styles["nav"]} ${styles["is-open"]}`
    : `${styles["nav"]}`;

  

  return(
    <>
      <button onClick={() => setMenuOpen(!menuOpen)} className={styles["nav-toggle"]}>
        <MenuIcon></MenuIcon>
      </button>

        <nav className={menuStyles}>
          <ul className={styles["nav-main"]}>
          {
            planets.map(planet => 
              { const menuClasses = activeTab === planet
                ? `${styles["nav-link"]} ${styles[`nav-link--${planet.toLowerCase()}`]} ${styles["active"]}`
                : `${styles["nav-link"]} ${styles[`nav-link--${planet.toLowerCase()}`]}`
              
                return <li key={planet}>
                  <Link to={`/${planet.toLowerCase()}`} onClick={() => setMenuOpen(!menuOpen)} className={menuClasses}>{planet}</Link>
                </li>
              })
          }                                                    
        </ul>
      </nav>
    </>
  )
}

export default HamburgerNav;