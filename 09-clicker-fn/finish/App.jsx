import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="App">
            <button onClick={decrement}>-</button>
            <span style={{ display: 'inline-block', margin: '0 0.5rem' }}>
                {count}
            </span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default App;
