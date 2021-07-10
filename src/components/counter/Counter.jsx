import React, { useState } from 'react';
import DisplayCount from './DisplayCount';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter app</h1>
      <DisplayCount currentCount={count} />
      <button onClick={() => increaseCount()}>Increase</button>
    </div>
  );
}

export default Counter;
