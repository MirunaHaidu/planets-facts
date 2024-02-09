import { useState } from 'react'


const Planet = ({ planet }) => {
    const [selectedTab, setSelectedTab] = useState('overview')

    const handleTabChange = (tab) => {
        setSelectedTab(tab)
    }

    return (
        <div className="planet-container">
            <div className="planet-image">
                <img src={planet.images[selectedTab]} alt={`Planet ${planet.name}`} />
            </div>
            <div className="planet-details">
                <h2>{planet.name}</h2>
                <p>{planet[selectedTab].content}</p>
                <a href={planet[selectedTab].source} target="_blank" rel="noopener noreferrer">Source</a>
                <div className="tab-buttons">
                    <button className={selectedTab === 'overview' ? 'active' : ''} onClick={() => handleTabChange('overview')}>OVERVIEW</button>
                    <button className={selectedTab === 'structure' ? 'active' : ''} onClick={() => handleTabChange('structure')}>INTERNAL STRUCTURE</button>
                    <button className={selectedTab === 'geology' ? 'active' : ''} onClick={() => handleTabChange('geology')}>SURFACE GEOLOGY</button>
                </div>
            </div>
            <div className="planet-stats">
                <div className="stat">
                    <p className="stat-title">ROTATION TIME</p>
                    <p className="stat-info">{planet.rotation}</p>
                </div>
                <div className="stat">
                    <p className="stat-title">REVOLUTION TIME</p>
                    <p className="stat-info">{planet.revolution}</p>
                </div>
                <div className="stat">
                    <p className="stat-title">RADIUS</p>
                    <p className="stat-info">{planet.radius}</p>
                </div>
                <div className="stat">
                    <p className="stat-title">AVERAGE TEMP.</p>
                    <p className="stat-info">{planet.temperature}</p>
                </div>
            </div>

        </div>
    )


}

export default Planet