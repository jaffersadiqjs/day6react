import React, { useState } from 'react';

const InputField = () => {
  const [text, setText] = useState('');

  return (
    <div>
        <h2>Task-8</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
};

export default InputField;