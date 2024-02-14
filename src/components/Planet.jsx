import { useEffect, useRef, useState } from 'react'
import React from 'react';
import '../style/Planet.css'
import TabButtons from './TabButtons';

const Planet = ({ planet }) => {
    const [selectedTab, setSelectedTab] = useState('overview')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



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
        <div className='container'>
            <div className="planet-container">
                {(screenWidth <= 767) && <TabButtons selectedTab={selectedTab} handleTabChange={handleTabChange} planet={planet} screenWidth={screenWidth}/>}

                <div className="planet-image">
                    {selectedTab === 'geology' ? (
                        <>
                            <img className={`planet-img-${planet.name}`} src={planet.images.planet} alt={`Planet ${planet.name}`} />
                            <img className='planet-geology-image' src={planet.images.geology} alt={`Planet ${planet.name}`} />
                        </>
                    ) : (
                        <img className={`planet-img-${planet.name}`} src={getImageSource()} alt={`Planet ${planet.name}`} />
                    )}
                </div>
                <div className="planet-details">
                    <div className='planet-info'>
                        <h2>{planet.name}</h2>
                        <p>{planet[selectedTab].content}</p>
                        <div className='source'>
                            Source:
                            <a href={planet[selectedTab].source} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                            <span className="material-symbols-outlined">
                                open_in_new
                            </span>
                        </div>

                    </div>

                    {(screenWidth > 767) && <TabButtons selectedTab={selectedTab} handleTabChange={handleTabChange} planet={planet} screenWidth={screenWidth}/>}

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