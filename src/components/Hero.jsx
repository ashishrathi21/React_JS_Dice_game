import React from 'react'
import dice from '../assets/dices.png'

const Hero = ({ toggleGamePlay }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 py-10 px-5 md:h-screen">

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={dice} 
          alt="dice" 
          className="object-contain w-60 md:w-80 lg:w-[400px]"
        />
      </div>

      {/* Text + Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          DICE GAME
        </h1>

        <button
          onClick={toggleGamePlay}
          className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
        >
          Play Now
        </button>
      </div>

    </div>
  )
}

export default Hero
