import React from 'react';

const Header = ({ planets, handleClick }) => {
    return (
        <header className="header">
            <h1 className="logo">The planets</h1>
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
