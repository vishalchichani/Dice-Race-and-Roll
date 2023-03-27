import React from 'react'

function Dice(props){

    const styles = {
        backgroundColor: props.isHold ? "goldenrod" : "white"
    }

    return(

            <div className='dice' style={styles} onClick={props.handleclick}> 
                <h2> {props.value} </h2>
            </div>
        
    )
}
export default Dice;