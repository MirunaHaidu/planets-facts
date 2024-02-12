import { useState } from 'react'
import React from 'react';
import '../style/Planet.css'

const Planet = ({ planet }) => {
    const [selectedTab, setSelectedTab] = useState('overview')



    const handleTabChange = (tab) => {
        setSelectedTab(tab)
    }

    const getImageSource = () => {
        switch (selectedTab) {
            case 'overview':
                return planet.images.planet
            case 'structure':
                return planet.images.internal
            case 'geology':
                return planet.images.geology
            default:
                return ''
        }
    }

    return (
        <>
            <div className="planet-container">
                <div className="planet-image">
                    {selectedTab === 'geology' ? (
                        <>
                            <img className='planet-overview-image' src={planet.images.planet} alt={`Planet ${planet.name}`} />
                            <img className='planet-geology-image' src={planet.images.geology} alt={`Planet ${planet.name}`} />
                        </>
                    ) : (
                        <img src={getImageSource()} alt={`Planet ${planet.name}`} />
                    )}
                </div>
                <div className="planet-details">
                    <h2>{planet.name}</h2>
                    <p>{planet[selectedTab].content}</p>
                    <div className='source'>
                        Source:
                        <a href={planet[selectedTab].source} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        <span className="material-symbols-outlined">
                            open_in_new
                        </span>
                    </div>

                    <div className="tab-buttons">
                        <button className={selectedTab === 'overview' ? 'active' : ''} onClick={() => handleTabChange('overview')}> 01&nbsp;&nbsp;&nbsp;OVERVIEW</button>
                        <button className={selectedTab === 'structure' ? 'active' : ''} onClick={() => handleTabChange('structure')}>02&nbsp;&nbsp;&nbsp;INTERNAL STRUCTURE</button>
                        <button className={selectedTab === 'geology' ? 'active' : ''} onClick={() => handleTabChange('geology')}>03&nbsp;&nbsp;&nbsp;SURFACE GEOLOGY</button>
                    </div>
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


        </>
    )


}

export default Planet