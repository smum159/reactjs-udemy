import React, { useState } from 'react';
import PropTypes from 'prop-types';

//This is our first dinamyc React component. Let's break it down a little bit

// We have the base strucuture with his prop defined
const CounterApp = ({counterValue}) => {
    // Here we are implemeting a React Hook for the very first time. This hook has been
    // already imported at the top. 
    // This hook help us to change the value of our variables on a solid way
    // useState Hook:
    // The structure of this hook simple, we have an array const with two values
    // the one in the firs position its the value that we are gonna implement to use
    // the value of our variable, the second one is the method were we going to change
    // the value of the first one. This const is equal to a function, our hook.
    // Here si were we're speicifying that  this variale uses a hook. Inside the useState
    // parameters we can set the initial values for our variables, in this case we are using
    // the one of the props to set de initial value.
    const [counter, setCounter] = useState(counterValue);

    // As we can observe we are using 3 buttons to alter our variable. All these are using
    // Reacts onClick event handler and inside of it uses the setCounter method we specified
    // before, and with that method we specify how we want to alter our variable:
    // Button #1: Substact one each time we click it
    // Button #2: Reset the value to the initial value implementing our function prop
    // Button $3: Add one unit each time we click it
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            
            <button onClick={()=> setCounter(counter - 1)}>-1</button>
            <button onClick={()=> setCounter(counterValue)}>Reset</button>
            <button onClick={()=> setCounter(counter + 1)}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    counterValue: PropTypes.number
}
CounterApp.defaultProps = {
    counterValue: "Missing counter value"
}

export default CounterApp;