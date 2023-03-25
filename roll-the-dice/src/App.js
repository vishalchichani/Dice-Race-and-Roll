import React from 'react';
import Dice from './Dice';

function App() {
    return (
      <div>
      <div className='container'>
        <h1> Roll the Dice!</h1>
          <div className='dice-box'>
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          </div>
      </div>
      <button className='btn'> ROLL </button>
      </div>
    )
}

export default App;
