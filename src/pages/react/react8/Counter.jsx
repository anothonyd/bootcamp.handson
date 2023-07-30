import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const stateCount = () => {
        return '';
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const keyPressDown = () => {
        alert('Down button pressed');
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div className='counter shadow p-4 bg-white rounded'>
            Counter
            <p className='countBox text-xl font-bold'>{count}</p>
            <div className='buttons'>
                <button className='btn btn-success m-1 rounded border border-dark-subtle shadow-md px-4 py-2' onClick={() => { stateCount(); setCount(count + 1) }}>
                    Plus One
                </button>
                <button className='btn btn-danger m-1 rounded border border-dark-subtle shadow-md px-4 py-2' onClick={() => setCount(count - 1)}>
                    Minus One
                </button>
                <button className='btn btn-primary m-1 rounded border border-dark-subtle shadow-md px-4 py-2' onClick={resetCounter}>
                    Reset
                </button>
                <button className='btn btn-dark m-1 rounded border border-dark-subtle shadow-md px-4 py-2' onClick={() => sayWelcome('Welcome')}>
                    Say Welcome
                </button>
                <input className='btn btn-warning m-1 rounded border border-dark-subtle shadow-md px-4 py-2' type="submit" value='Click and press "Down"' onKeyDown={keyPressDown}></input>
            </div>
        </div>
    );
};

export default Counter;
