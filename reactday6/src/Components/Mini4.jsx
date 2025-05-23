import React, { useState } from 'react';

const LightToggle = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleToggle = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div>
        <h2>Miniproject-4</h2>
      <button onClick={handleToggle}>
        {isLightOn ? 'Light OFF' : 'Light ON'}
      </button>
      <p>Light is {isLightOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default LightToggle;
