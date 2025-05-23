import React, { useState } from 'react';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <h2>Task-7</h2>
      <button onClick={handleClick}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>Content is visible!</p>}
    </div>
  );
};

export default Toggle;