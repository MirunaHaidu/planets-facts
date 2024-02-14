import React, { useState, useEffect, useRef } from 'react';
import '../style/Header.css'

const Header = ({ planets, selectedPlanet, handleClick }) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handlePlanetClick = (planet) => {
        handleClick(planet)
        setMenuOpen(false)
    }


    return (
        <header className="header">
            <h1 className="logo">THE PLANETS</h1>
            <button className="hamburger-menu" onClick={toggleMenu}>
                <span className="material-symbols-outlined">menu</span>
            </button>
            <ul className={`planets-list ${menuOpen ? 'menu-open' : ''}`} ref={menuRef}>
                {planets.map((planet) => (
                    <li
                        key={planet.name}
                        className={`planet-name-list ${selectedPlanet === planet ? 'active' : ''}`}
                        onClick={() => handlePlanetClick(planet)} // Call handlePlanetClick with the selected planet
                    >
                        {planet.name}
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;