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

    const newDice = generateDice().map(item => {
      return (
        <Dice value={item} />
      )
    })

    return (
      <div>
      <div className='container'>
        <h1> Roll the Dice!</h1>
          <div className='dice-box'>
            {newDice}
          </div>
      </div>
      <button className='btn'> ROLL </button>
      </div>
    )
}

export default App;
