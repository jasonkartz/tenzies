import React, {useState, useEffect} from 'react';
import Die from './Components/Die'
import RollDice from './Components/RollDice'
import Header from './Components/Header'
import Confetti from 'react-confetti'
import {data} from './data'

//track # of rolls
//track time it took to win
//save best time to localStorage

export default function App() {

  const [dice, setDice] = useState(data)
  const [gameComplete, setGameComplete] = useState(false)

  function gameReset() {
    setDice(dice => dice.map(die => {
      const newNumber = Math.ceil(Math.random() * 6)
      return {...die, value: newNumber, selected: false}
    }))
    setGameComplete(false)
  }
 
  function randomize() {
    setDice(dice => dice.map(die => {
      const newNumber = Math.ceil(Math.random() * 6)
      return die.selected ? {...die} : {...die, value: newNumber}
    }))
  }

  function freezeNumber(id) {
    setDice(dice => dice.map( die => 
      die.id === id ? {...die, selected: !die.selected} : {...die}))
  }

  useEffect(() => gameReset(), [])

  useEffect(() => {
    if (dice.every(die => die.value === dice[0].value && die.selected)) {
      setGameComplete(true)
    }
  } ,[dice])

  const diceValues =  dice.map(die => 
    <Die 
      key={die.id}
      value={die.value} 
      selected={die.selected ? " selected" : ""}
      handleClick={()=>gameComplete ? null : freezeNumber(die.id)}
    />)
 

  return (
    <main>
      {gameComplete && <Confetti />}
      <Header gameComplete={gameComplete} />
      <div className="die-container">
        {diceValues}
      </div>
      <RollDice 
        handleClick={gameComplete ? gameReset : randomize}
        gameComplete={gameComplete}
      />
    </main>
  )
}

