import { Fragment } from 'react';
import Products from './components/Products/Products';
import Counter from './components/Counter';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className='p-4'>
      <RouterProvider router={router} />
      {/* <Counter /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/*  <Products /> */}
    </div>
  );
}

export default App;
