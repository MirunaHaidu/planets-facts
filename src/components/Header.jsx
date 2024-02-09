import React from 'react';
import '../style/Header.css'

const Header = ({ planets, handleClick }) => {
    return (
        <header className="header">
            <h1 className="logo">THE PLANETS</h1>
            <ul className="planets-list">
                {planets.map((planet) => (
                    <li key={planet.name} className="planet-name-list" onClick={() => handleClick(planet)}>
                        {planet.name}
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;
