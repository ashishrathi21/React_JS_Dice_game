import React from 'react'

const NumberSelector = ({ isSelected, setIsSelected }) => {
  const arr = [1, 2, 3, 4, 5, 6]

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {arr.map(item => (
        <div
          key={item}
          onClick={() => setIsSelected(item)}
          className={`
            cursor-pointer w-12 h-12 flex text-xl font-bold 
            items-center justify-center border border-black rounded-lg 
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
