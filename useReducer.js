import React, { useState, useReducer } from 'react'
function reducer(state, action){
   
}

export default function App(){

    const [state, dispatch] = useReducer(reducer,{count: 0 })
    const [count, setCount] = useState(0)
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement(){
        setCount(prevCount => prevCount - 1)
    }
return (
    <>
    <button onClick={decrement}> - </button>
    <p> {count}</p>
    <button onClick={increment}> + </button>
    </>
)
}