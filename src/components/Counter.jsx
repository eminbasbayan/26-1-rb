import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Emre');

  /*   useEffect(() => {
    console.log("Component DOM'a ilk yüklendiğinde çalışır!");
  }, []); */

  useEffect(() => {
    console.log("Component DOM'a ilk yüklendiğinde ve deps array içine yazılanlar değiştiğinde çalışır!");
  }, [title, count]);

  return (
    <div className="counter">
      <strong>{title}</strong>
      <br />
      <button onClick={() => setTitle('Emin')}>İsmi Değiştir</button>
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <strong>{count}</strong>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
