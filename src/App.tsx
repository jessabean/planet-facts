import logo from './assets/images/logo.svg';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import PlanetPage from './components/PlanetPage/PlanetPage';
import { Planet } from './types/planet.type'

const initialPlanet: Planet = {
  "name": "Mercury",
  "overview": {
    "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
  },
  "structure": {
    "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
  },
  "geology": {
    "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
  },
  "rotation": "58.6 Days",
  "revolution": "87.97 Days",
  "radius": "2,439.7 KM",
  "temperature": "430°c",
  "images": {
    "planet": "./assets/planet-mercury.svg",
    "internal": "./assets/planet-mercury-internal.svg",
    "geology": "./assets/geology-mercury.png"
  }
};

function App() {
  const [planets, setPlanets] = useState<Planet[] | []>([]);
  const [currentPlanet, setCurrentPlanet] = useState<Planet>(initialPlanet)

  function getPlanetNames(): string[] {
    if (planets.length) {
      return planets.map((planet: any) => planet.name);
    } else {
      return [];
    }
  }

  useEffect(() => {
    fetch('https://run.mocky.io/v3/9d5a78ef-ee77-4d25-93a1-7a04d0788f27')
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          setPlanets(data);
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=League+Spartan:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav activeTab={currentPlanet.name} planets={getPlanetNames()}></Nav>
        </header>
        <main className='main-content'>
          <PlanetPage data={currentPlanet}></PlanetPage>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
