import logo from './assets/images/logo.svg';
import { Route, Routes } from "react-router-dom"
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query'
import Nav from './components/Nav/Nav';
import HamburgerNav from './components/HamburgerNav/HamburgerNav';
import PlanetPage from './components/PlanetPage/PlanetPage';
import { Planet } from './types/planet.type'
import { useParams } from "react-router-dom";

const initialPlanet: Planet = {
  "name": "Mercury",
  "overview": {
    "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)",
    "image": "planet-mercury.svg"
  },
  "structure": {
    "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    "image": "planet-mercury-internal.svg"
  },
  "geology": {
    "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    "image": "geology-mercury.png"
  },
  "rotation": "58.6 Days",
  "revolution": "87.97 Days",
  "radius": "2,439.7 KM",
  "temperature": "430°c"
};

function App() {
  const { id } = useParams();

  const [planets, setPlanets] = useState<Planet[] | []>([]);
  const [currentPlanet, setCurrentPlanet] = useState<Planet>()
  const [loading, setLoading] = useState(true);

  function getPlanetNames(): string[] {
    if (planets.length) {
      return planets.map((planet: any) => planet.name);
    } else {
      return [];
    }
  }

  const matchesSmallScreen = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    fetch('https://run.mocky.io/v3/cf170e49-4822-4bcc-a741-2048d4a6377f')
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          setPlanets(data);
          setLoading(false);
        }
      })
      .catch(error => console.log(error))
      console.log(currentPlanet)
  }, [])

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="preload" href="assets/fonts/LeagueSpartan-Regular.woff2" as="font" type="font/woff2" />
        </Helmet>
        {
          loading 
          ? <div>Loading...</div>
          : <Fragment>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />      
                {
                  matchesSmallScreen
                  ? <HamburgerNav activeTab={currentPlanet?.name} planets={getPlanetNames()}></HamburgerNav>
                  : <Nav activeTab={currentPlanet?.name} planets={getPlanetNames()}></Nav>
                }  
              </header>
              <main className='main-content'>
                <Routes>
                  <Route path="/" element={<PlanetPage data={planets[0]}></PlanetPage>} />
                  <Route path="/:id" element={<PlanetPage data={currentPlanet || planets[0]}></PlanetPage>} />
                </Routes>
                {/* <PlanetPage data={currentPlanet}></PlanetPage> */}
              </main>
            </Fragment>
        }
      </div>
    </HelmetProvider>
  );
}

export default App;
