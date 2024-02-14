import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Planet from './components/Planet'
import data from './data.json'

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(data.find(planet => planet.name === 'Earth'))

  const handleClick = (planet) => {
    setSelectedPlanet(planet)
  }

  return (
    <div className='app-container'>
        <Header planets={data} selectedPlanet={selectedPlanet} handleClick={handleClick}/>
        {selectedPlanet && <Planet planet={selectedPlanet} />}
    </div>
  )
}

export default App
