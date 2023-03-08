import { useState } from "react";
import './PlanetPage.css';
import { ReactComponent as SourceIcon } from '../../assets/images/icon-source.svg';


function PlanetPage({data}) {
  const tabs = ['overview', 'structure', 'geology'];

  const [selectedTab, setSelectedTab] = useState('overview');   
  const selectedFact = data[selectedTab];
  const planetName = data.name.toLowerCase();

  
  return (
    <div className={`planet planet--${data.name.toLowerCase()}`}>
      <div className="tab-list" role="tablist">
        {
          tabs.map((tab, index) => {
            const tabNum = index + 1;
            const buttonClass = tab === selectedTab
              ? `tab-button tab-button--active`
              : `tab-button`;
            return (
              <button className={buttonClass} onClick={() => setSelectedTab(tab)} role="tab">
                <span className="tab-number">{`0+${tabNum}`}</span>
                {tab}
              </button>
            )
          })
        }
      </div>

      <figure className={`planet-image planet-image--${planetName}`}>
        <img src={`./${selectedFact.image}`} alt={`Illustration of ${data.name}: ${selectedTab}`} />
      </figure>

      <div className="planet-facts">
        <h1 className="planet-name text--display">{data.name}</h1>
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