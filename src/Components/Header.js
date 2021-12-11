import React from 'react'

export default function Header(props) {
    return (
        <header>
            <h1>{props.gameComplete ? "Winner!" : "Tenzies"}</h1>
            <p>
                {!props.gameComplete && "Roll until all dice are the same. Click each die to freeze it at it's current number bewteen rolls."}
            </p>
        </header>
    )
}