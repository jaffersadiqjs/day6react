import React, { useState } from 'react';

const User = () => {
  const [name, setName] = useState('Jaffer');
  const [age, setAge] = useState(27);

  return (
    <div>
        <h2>Task-6</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName('sadiq')}>Update Name</button>
      <button onClick={() => setAge(28)}>Update Age</button>
    </div>
  );
};

export default User;
