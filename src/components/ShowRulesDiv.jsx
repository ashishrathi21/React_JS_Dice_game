import React from 'react'

const ShowRulesDiv = () => {
  return (
    <div className='my-10 bg-amber-100 p-10 rounded-xl'>
        <h2 className="text-3xl font-bold text-start">How To play Dice Game</h2>
        <ol className="list-disc list-inside mt-4">
            <li>Select a number between 1 and 6.</li>
            <li>Click the Dice Image to roll the dice.</li>
            <li>If the number on the dice matches your selection, your score will increase.</li>
            <li>If the numbers don't match, your score will decrease.</li>
            <li>You can reset the game at any time by clicking the "Reset Game" button.</li>
        </ol>
    </div>
  )
}

export default ShowRulesDiv