'use client';
import {useReducer} from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + 1,
            };
        case 'DECREMENT' :
            return {
                count: state.count - 1,
            }
    }
}

const initialState = {
    count: 0,
}

export default function CounterWithReducer(){
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const inc= () => {
        dispatch({
            type: 'INCREMENT',
        })
    }

    const dec= () => {
        dispatch({
            type: 'DECREMENT',
        })
    }

    return (
        <div>
            <button type={'button'} onClick={inc}>+</button>
            <h1>{state.count}</h1>
            <button type={'button'} onClick={dec}>-</button>

        </div>
    )
}