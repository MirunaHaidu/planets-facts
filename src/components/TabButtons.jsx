import React from 'react';
import '../style/TabButtons.css'

const TabButtons = ({ selectedTab, handleTabChange, planet }) => {
    return (
        <div className="tab-buttons">
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
        </div>
    );
};

export default TabButtons;
