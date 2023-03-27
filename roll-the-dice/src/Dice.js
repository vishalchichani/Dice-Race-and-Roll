import React from 'react'

function Dice(props){

    const style = {
        backgroundColor: props.isHold ? "goldenrod" : "white"
    }

    return(

            <div className='dice' style={style}> 
                <h2> {props.value} </h2>
            </div>
        
    )
}
export default Dice;