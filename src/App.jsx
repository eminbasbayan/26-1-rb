import { Fragment } from 'react';
import Products from './components/Products/Products';
import Modal from './components/UI/Modal';

function App() {
  return (
    <Fragment>
      <h1>App Component</h1>

      <Products />
      <Modal />
    </Fragment>
  );
}

export default App;
