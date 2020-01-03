import React from "react"
import useLogic from './useLogic'


function GameApp() {

    const {textBoxRef, handleChange, isTimeRunning, text, timeRemaining, startGame, wordCount} = useLogic(15)
    
    return (
        <div className="flex-center">
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default GameApp