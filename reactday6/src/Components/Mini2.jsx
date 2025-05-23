import React, { useState } from 'react';

const NameDisplay = () => {
  const [name, setName] = useState('');

  return (
    <div>
        <h2>Miniproject-2</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default NameDisplay;

