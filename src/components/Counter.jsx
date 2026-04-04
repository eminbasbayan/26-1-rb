import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function arttir() {
    setCount(count + 1);
  }

  function azalt() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button onClick={arttir}>+</button>
      <strong>{count}</strong>
      <button onClick={azalt}>-</button>
    </div>
  );
}

export default Counter;
