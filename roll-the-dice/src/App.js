import React from 'react';
import Dice from './Dice';

function App() {
    function generateDice(){
      let diceValue=[];
      for(let i=0; i<10;i++){
        diceValue.push( {value: Math.ceil(Math.random()*6), isHold:false});
      }
      return diceValue; 
    }
    
    const [dice, setDice] = React.useState(generateDice());
    
   

    let newDice =[];
    newDice=dice.map(item => {
      return (
        <Dice value={item.value} isHold={item.isHold} />
      )
    })

    function rollTheDice(){
      setDice(generateDice());
    }
   

    return (
      <div>
      <div className='container'>
        <div className='head'>
          <h1> Roll the Dice!</h1>
          <p> Freeze all the dice at same number in minimum number of moves. Make your choice wisely!</p>
        </div>
          <div className='dice-box'>
            {newDice}
          </div>
      </div>
      <button className='btn' onClick={rollTheDice}> ROLL </button>
      <div className='score'>
        <h2> 0 </h2>
        <h3>Personal Best: </h3>
      </div>
      </div>
    )
}

export default App;
