import React from 'react';
import Dice from './Dice';
import {nanoid} from 'nanoid';
function App() {
    
    
    const [dice, setDice] = React.useState(generateDice());
    
    function generateDice(){
      let diceValue=[];
      for(let i=0; i<10;i++){
        diceValue.push( {id: nanoid(), value: Math.ceil(Math.random()*6), isHold:false});
      }
      return diceValue; 
    }

    function rollTheDice(){
      setDice(prevState => prevState.map(item => {
        return item.isHold ? 
        item : 
        {...item, value: Math.ceil(Math.random()*6)}
      }));
    }
    
    function handleClick(id){
        setDice(prevState => prevState.map(items => {
              return items.id === id ? {...items, isHold: !items.isHold} :items
            })
        )
    }

   
  

   

    
    const newDice=dice.map(item => (
        <Dice 
        key= {item.id}
        value={item.value} 
        isHold={item.isHold} 
        handleclick={() => handleClick(item.id)} 
        />
    ))

    
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
