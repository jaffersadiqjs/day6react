import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>Task-3</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;

