import React from 'react';
import Dice from './Dice';
import { nanoid } from 'nanoid';
function App() {


  const [dice, setDice] = React.useState(generateDice());
  const [moves, setMoves] = React.useState(0);
  const [allSame, setAllSame] = React.useState(false);


  React.useEffect(() => {
    const allHold = dice.every(die => die.isHold);
    const sameValue = dice[0].value;
    const allValueSame = dice.every(die => die.value === sameValue);
    if (allHold && allValueSame) {
      setAllSame(true);
    }
  }, [dice]);

  

  function generateDice() {
    let diceValue = [];
    for (let i = 0; i < 10; i++) {
      diceValue.push({ id: nanoid(), value: Math.ceil(Math.random() * 6), isHold: false });
    }
    return diceValue;
  }

  function rollTheDice() {

    if (allSame) {
      const prevBest = JSON.parse(localStorage.getItem("bestScore")) ? JSON.parse(localStorage.getItem("bestScore")) : { bestTillNow: 1000 };
      if (prevBest.bestTillNow > moves) {
        prevBest.bestTillNow = moves;
        localStorage.setItem("bestScore", JSON.stringify(prevBest));
      }
      setAllSame(false);
      setDice(generateDice());
      setMoves(0);
    }
    else {
      setDice(prevState => prevState.map(item => {
        return item.isHold ?
          item :
          { ...item, value: Math.ceil(Math.random() * 6) }
      }));

      setMoves(prevState => prevState + 1);
    }
  }

  function handleClick(id) {
    setDice(prevState => prevState.map(items => {
      return items.id === id ? { ...items, isHold: !items.isHold } : items
    })
    )
  }







  const newDice = dice.map(item => (
    <Dice
      key={item.id}
      value={item.value}
      isHold={item.isHold}
      handleclick={() => handleClick(item.id)}
    />
  ))


  return (
    <div>
      <div className='container'>
        <div className='head'>
          <h1> {allSame ? "You Won!" : "Roll the Dice!"} </h1>
          <p> Freeze all the dice at same number in minimum number of moves. Make your choice wisely!</p>
        </div>
        <div className='dice-box'>
          {newDice}
        </div>
      </div>
      <button className='btn' onClick={rollTheDice}> {allSame ? "NEW GAME" : "ROLL"} </button>
      <div className='score'>
        <h2> {moves} </h2>
        <h3>Personal Best: {JSON.parse(localStorage.getItem("bestScore")) ?
        JSON.parse(localStorage.getItem("bestScore")).bestTillNow :
        "NIL"} </h3>
      </div>
    </div>
  )
}

export default App;
