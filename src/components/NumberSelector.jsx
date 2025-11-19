import React from 'react'

const NumberSelector = ({ isSelected, setIsSelected }) => {
  const arr = [1, 2, 3, 4, 5, 6]

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
      {arr.map(item => (
        <div
          key={item}
          onClick={() => setIsSelected(item)}
          className={`
            cursor-pointer flex items-center justify-center 
            border border-black rounded-lg font-bold
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl md:text-2xl
            ${isSelected === item ? "bg-black text-white" : ""}
          `}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default NumberSelector
