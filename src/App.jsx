import { Fragment } from 'react';
import Products from './components/Products/Products';
import Counter from './components/Counter';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='p-4'>
      <h1>App Component</h1>
      {/* <Counter /> */}
      <LoginPage />
      {/* <RegisterPage /> */}
     {/*  <Products /> */}
    </div>
  );
}

export default App;
