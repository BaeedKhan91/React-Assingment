import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice.js';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter</h1>
            <p style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign:"center",
                
            }}>Count: {count}
            <div style={{
                marginTop:"2%"
            }}>
            <button style={{
                // marginTop:"3%",
                marginRight:"3%"
            }} 
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                INCREMENT
            </button>
            <button 
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                DECREMENT
            </button>
            </div>
            </p>
        </>
    );
}

export default Counter;
