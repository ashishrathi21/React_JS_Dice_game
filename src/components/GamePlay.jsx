import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

const GamePlay = () => {

  const [score, setScore] = useState(0)
  const [currentDice, setCurrentDice] = useState(1)
  const [isSelected, setIsSelected] = useState(null)
  const [alert, setAlert] = useState("")

  const generateRandomDice = () => {

    if (isSelected === null) {
      setAlert("* Please select a number first")
      return
    }

    setAlert("")

    const randomNum = Math.floor(Math.random() * 6) + 1
    setCurrentDice(randomNum)

    if (isSelected === randomNum) {
      setScore(prev => prev + 1)
    } else {
      setScore(prev => prev - 1)
    }
  }

  const resetGame = () => {
    setScore(0)
    setCurrentDice(1)
    setIsSelected(null)
  }

  return (
    <section className="px-4 md:px-0">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-around gap-10 py-10">

        {/* Score */}
        <TotalScore score={score} />

        {/* Number Selector */}
        <div className="flex flex-col gap-2 items-center md:items-end">
          {alert && (
            <p className="text-red-600 text-md text-center md:text-end">
              {alert}
            </p>
          )}

          <NumberSelector 
            isSelected={isSelected} 
            setIsSelected={setIsSelected} 
          />

          <p className="text-lg font-bold text-center md:text-end">
            Select Number
          </p>
        </div>

      </div>

      {/* Dice Section */}
      <RollDice 
        currentDice={currentDice} 
        generateRandomDice={generateRandomDice}
        resetGame={resetGame}
      />

    </section>
  )
}

export default GamePlay
