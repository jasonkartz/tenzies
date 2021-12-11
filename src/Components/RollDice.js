import React from "react"

export default function RollDice(props) {
    
    return (
        <button className="roll-btn" onClick={props.handleClick}>
            {props.gameComplete ? "New Game" : "Roll"}
        </button>
    )
}