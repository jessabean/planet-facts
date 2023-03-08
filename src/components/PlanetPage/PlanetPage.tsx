import { useState } from "react";
import { Planet } from '../../types/planet.type'
import './PlanetPage.css';
import { ReactComponent as SourceIcon } from '../../assets/images/icon-source.svg';

interface Props {
  data: Planet
}

type Tabs = 
  'overview' |
  'structure' |
  'geology';

function PlanetPage({data} : Props) {
  const [selectedTab, setSelectedTab] = useState<Tabs>('overview');   
  const selectedFact = data[selectedTab];
  const planetName = data.name.toLowerCase();
  
  return (
    <div className="planet">
      <div className="tab-list" role="tablist">
        <button className="tab-button" onClick={() => setSelectedTab('overview')} role="tab"><span className="tab-number">01</span> Overview</button>
        <button className="tab-button" onClick={() => setSelectedTab('structure')} role="tab"><span className="tab-number">02</span> Structure</button>
        <button className="tab-button" onClick={() => setSelectedTab('geology')} role="tab"><span className="tab-number">03</span> Surface</button>
      </div>
      <figure className={`planet-image planet-image--${planetName}`}>
        <img src={`https://raw.githubusercontent.com/jessabean/planet-facts-images/main/${selectedFact.image}`} alt={`Illustration of ${data.name}: ${selectedTab}`} />
      </figure>
      <div className="planet-facts">
        <h2 className="planet-name text--display">{data.name}</h2>
        <p>{selectedFact.content}</p>
        <p className="planet-fact-source">Source: <a href={selectedFact.source}>Wikipedia</a><SourceIcon /></p>
      </div>
      <dl className="planet-statistics">
        <div className="planet-statistic">
          <dt>Rotation Time</dt>
          <dd className="text--display">{data.rotation}</dd>
        </div>
        <div className="planet-statistic">
          <dt>Revolution Time</dt>
          <dd className="text--display">{data.revolution}</dd>
        </div>
        <div className="planet-statistic">
          <dt>Radius</dt>
          <dd className="text--display">{data.radius}</dd>
        </div>
        <div className="planet-statistic">
          <dt>Average Temp.</dt>
          <dd className="text--display">{data.temperature}</dd>
        </div>
      </dl>
    </div>
  )
}

export default PlanetPage;