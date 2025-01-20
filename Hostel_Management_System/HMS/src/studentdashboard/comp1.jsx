import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, Welcome to MyComponent!</h1>
      <p>You've clicked the button {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
