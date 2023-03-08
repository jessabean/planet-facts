import logo from './assets/images/logo.svg';
import { Route, Routes, useLocation, Link } from "react-router-dom"
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query'
import { Planet } from './types/planet.type'

import Nav from './components/Nav/Nav';
import HamburgerNav from './components/HamburgerNav/HamburgerNav';
import PlanetPage from './components/PlanetPage/PlanetPage';

function App() {
  const location = useLocation();
  const matchesSmallScreen = useMediaQuery('(max-width: 767px)');

  const [planets, setPlanets] = useState<Planet[] | []>([]);
  const [currentPlanet, setCurrentPlanet] = useState<Planet>()
  const [loading, setLoading] = useState(true);

  // I only want to pass planet names to the nav components, not the entire array of planet objects
  const planetNames = planets.map((planet: any) => planet.name);


  useEffect(() => {
    // Ideally I'd check to see if data is cached before fetching the endpoint
    // e.g., if this data exists in localstorage, use it (from the state variable), 
    // else fetch endpoint
    fetch('https://run.mocky.io/v3/0846332a-bb3f-429e-9946-f062ad2338f0')
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          setPlanets(data);
          setLoading(false);
        }
      })
      .catch(error => console.log(error))

    const planet = planets.find(
      (planet: any) => planet.name.toLowerCase() === location.pathname.substring(1)
    );
    setCurrentPlanet(planet);
  }, [location])

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="preload" href="assets/fonts/LeagueSpartan-Regular.woff2" as="font" type="font/woff2" />
        </Helmet>
        {
          loading 
          // This should be a loading component that looks nice :)
          ? <div>Loading...</div>
          : <Fragment>
              <header className="header">
                <Link to="/" className='logo-link'><img src={logo} className="logo" alt="logo" /></Link>      
                {
                  matchesSmallScreen
                  ? <HamburgerNav activeTab={currentPlanet?.name} planets={planetNames}></HamburgerNav>
                  : <Nav activeTab={currentPlanet?.name} planets={planetNames}></Nav>
                }  
              </header>
              <main className='main-content'>
                <Routes>
                  <Route path="/" element={<PlanetPage data={planets[0]}></PlanetPage>} />
                  <Route path="/:id" element={<PlanetPage data={currentPlanet || planets[0]}></PlanetPage>} />
                </Routes>
              </main>
            </Fragment>
        }
      </div>
    </HelmetProvider>
  );
}

export default App;
