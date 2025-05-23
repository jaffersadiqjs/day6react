import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState('Jaffer');

  const handleClick = () => {
    setName('sadiq');
  };

  return (
    <div>
        <h2>Task-5</h2>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Update Name</button>
    </div>
  );
};

export default Name;