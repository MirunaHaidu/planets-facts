import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Planet from './components/Planet'
import data from './data.json'

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  const handleClick = (planet) => {
    setSelectedPlanet(planet)
  }

  return (
    <div className='app-container'>
        <Header planets={data} handleClick={handleClick}/>
        {selectedPlanet && <Planet planet={selectedPlanet} />}
    </div>
  )
}

export default App
