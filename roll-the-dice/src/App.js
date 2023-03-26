import React from 'react';
import Dice from './Dice';

function App() {
    function generateDice(){
      let diceValue=[];
      for(let i=0; i<10;i++){
        diceValue.push(Math.ceil(Math.random()*6));
      }
      return diceValue; 
    }
    
    const [dice, setDice] = React.useState(generateDice());
    
    let newDice =[];
    newDice=dice.map(item => {
      return (
        <Dice value={item} />
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
      </div>
    )
}

export default App;
