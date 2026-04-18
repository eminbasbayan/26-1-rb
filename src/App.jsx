import { Fragment } from 'react';
import Products from './components/Products/Products';
import Counter from './components/Counter';

function App() {
  return (
    <div className='p-4'>
      <h1>App Component</h1>
      {/* <Counter /> */}
      <Products />
    </div>
  );
}

export default App;
