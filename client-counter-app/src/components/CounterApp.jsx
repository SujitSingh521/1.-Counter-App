import React, { useState } from 'react';
import './CounterApp.css'; // optional CSS file

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Simple Counter App</h2>
      <h1>{count}</h1>
      <div className="btn-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count <= 0}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
