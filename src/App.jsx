import { Fragment } from 'react';
import Products from './components/Products/Products';
import Counter from './components/Counter';

function App() {
  return (
    <Fragment>
      <h1>App Component</h1>
      <Counter />
      {/*  <Products /> */}
    </Fragment>
  );
}

export default App;
