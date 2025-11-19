import React, { useState } from 'react'
import ShowRulesDiv from './ShowRulesDiv'
import dice1 from '../assets/1.png'
import dice2 from '../assets/2.png'
import dice3 from '../assets/3.png'
import dice4 from '../assets/4.png'
import dice5 from '../assets/5.png'
import dice6 from '../assets/6.png'

const RollDice = ({ currentDice, generateRandomDice, resetGame }) => {

    const [showRule, setShowRule] = useState(false)

  const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  }

  return (
    <section className="flex flex-col items-center gap-6 py-10">

      {/* Dice */}
      <div className="cursor-pointer hover:scale-105 transition duration-200">
        <img 
          onClick={generateRandomDice}
          src={diceImages[currentDice]}
          alt="dice" 
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Text */}
      <p className="text-xl font-semibold text-gray-700">
        Click On Dice To Roll
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-40">

        <button 
          onClick={resetGame}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Reset Dice
        </button>

        <button 
        onClick={() => setShowRule(!showRule)}
        className="w-full border border-black py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Show Rules
        </button>
      </div>

      <div>
        {showRule && <ShowRulesDiv />}
      </div>

    </section>
  )
}

export default RollDice
