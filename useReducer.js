import React, { useState, useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'

}
function reducer(state, action){
    switch (action.type){
        case  ACTIONS.INCREMENT:
            return { count: increment + 1}
            case ACTIONS.DECREMENT:
                return {count: decrement -1 }
                default: 
                return statr
    }

}

export default function App(){

    const [state, dispatch] = useReducer(reducer,{count: 0 })
    
    function increment() {
       dispatch( {type: ACTIONS.INCREMENT })
    }
    function decrement(){
        dispatch( {type: ACTIONS.DECREMENT })
    }
return (
    <>
    <button onClick={decrement}> - </button>
    <p> {count}</p>
    <button onClick={increment}> + </button>
    </>
)
}