import { useState } from "react";
import { Planet } from '../../types/planet.type'
import './PlanetPage.css';

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
  
  return (
    <div className="planet">
      <div className="tab-list" role="tablist">
        <button className="tab-button" onClick={() => setSelectedTab('overview')}>Overview</button>
        <button className="tab-button" onClick={() => setSelectedTab('structure')}>Structure</button>
        <button className="tab-button" onClick={() => setSelectedTab('geology')}>Surface</button>
      </div>
      <figure className="planet-image">
        <img src={`https://raw.githubusercontent.com/jessabean/planet-facts-images/main/${selectedFact.image}`} />
      </figure>
      <div className="planet-facts">
        <h2 className="planet-name">{data.name}</h2>
        <p>{selectedFact.content}</p>
        <p>{selectedFact.source}</p>
      </div>
      <dl className="planet-data">
        <dt>Rotation Time</dt>
        <dd>{data.rotation}</dd>
        <dt>Revolution Time</dt>
        <dd>{data.revolution}</dd>
        <dt>Radius</dt>
        <dd>{data.radius}</dd>
        <dt>Average Temp.</dt>
        <dd>{data.temperature}</dd>
      </dl>
    </div>
  )
}

export default PlanetPage;