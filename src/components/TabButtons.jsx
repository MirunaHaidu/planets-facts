import React from 'react';
import '../style/TabButtons.css'

const TabButtons = ({ selectedTab, handleTabChange, planet, screenWidth }) => {
    const renderNumerotation = screenWidth > 767;

    return (
        <div className="tab-buttons">
            {renderNumerotation ? (
                <>
                    <button
                        className={`tab-button ${selectedTab === 'overview' ? 'active' : ''} planet-${planet.name.toLowerCase()}`}
                        onClick={() => handleTabChange('overview')}
                    >
                        01&nbsp;&nbsp;&nbsp;OVERVIEW
                    </button>
                    <button
                        className={`tab-button ${selectedTab === 'structure' ? 'active' : ''} planet-${planet.name.toLowerCase()}`}
                        onClick={() => handleTabChange('structure')}
                    >
                        02&nbsp;&nbsp;&nbsp;INTERNAL STRUCTURE
                    </button>
                    <button
                        className={`tab-button ${selectedTab === 'geology' ? 'active' : ''} planet-${planet.name.toLowerCase()}`}
                        onClick={() => handleTabChange('geology')}
                    >
                        03&nbsp;&nbsp;&nbsp;SURFACE GEOLOGY
                    </button>
                </>
            ) : (
                <>
                    <button
                        className={`tab-button ${selectedTab === 'overview' ? 'active' : ''} planet-${planet.name.toLowerCase()}`}
                        onClick={() => handleTabChange('overview')}
                    >
                        OVERVIEW
                    </button>
                    <button
                        className={`tab-button ${selectedTab === 'structure' ? 'active' : ''} planet-${planet.name.toLowerCase()}`}
                        onClick={() => handleTabChange('structure')}
                    >
                        STRUCTURE
                    </button>
                    <button
                        className={`tab-button ${selectedTab === 'geology' ? 'active' : ''} planet-${planet.name.toLowerCase()}`}
                        onClick={() => handleTabChange('geology')}
                    >
                        GEOLOGY
                    </button>
                </>
            )}
        </div>
    );
};

export default TabButtons;

