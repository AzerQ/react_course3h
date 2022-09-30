import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function inc() {
        setCount(count + 1);
        console.log(`count count = ${count}`);
    }

    function dec() {
        setCount(count - 1);
        console.log(`count count = ${count}`);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
};

export default Counter;