import { useState } from "react";
import styles from './HamburgerNav.module.css'
import { ReactComponent as MenuIcon } from '../../assets/images/icon-hamburger.svg';

interface Props {
  activeTab: string,
  planets: Array<string>
}

function HamburgerNav({ activeTab, planets }: Props) {
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
            planets.map(planet => <li key={planet} className={activeTab === planet ? 'active' : ''}>{planet}</li>)
          }                                                    
        </ul>
      </nav>
    </>
  )
}

export default HamburgerNav;