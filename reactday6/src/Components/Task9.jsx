import React, { useState } from 'react';

const Task9 = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
        <h2>Task-9</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Task9;