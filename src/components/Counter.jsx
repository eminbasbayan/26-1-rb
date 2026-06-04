import { useRef, useState } from 'react';
import Button from './UI/Button';

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let newCount = 0;

  console.log('Counter component re-render oldu!');

  function arttir() {
    /* setCount((prev) => prev + 1); */
    countRef.current++;

    newCount++;
    console.log(countRef.current);
    console.log('newCount: ', newCount);
  }

  function azalt() {
    setCount((prev) => prev - 1);
    /* countRef.current--; */
  }

  return (
    <div className="counter">
      <Button variant={'primary'} onClick={arttir}>
        +
      </Button>
      <strong className="mx-4">{count}</strong>
      <Button variant={'danger'} onClick={azalt}>
        -
      </Button>
    </div>
  );
}

export default Counter;
