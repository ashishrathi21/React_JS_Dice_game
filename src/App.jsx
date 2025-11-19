import React, { useState } from 'react'
import Hero from './components/Hero'
import GamePlay from './components/GamePlay'
import Footer from './components/Footer'



const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () =>{
    setIsGameStarted(!isGameStarted)
  }

  return (
    <div>
      {
        isGameStarted ? <GamePlay /> : <Hero toggleGamePlay={toggleGamePlay} />
      }
      <Footer />
    </div>
  )
}

export default App