import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import { ToastContainer } from 'react-toastify';
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/product-detail",
        element: <ProductDetailPage />
      }
    ]
  }

]);

function App() {
  return (
    <main className='main-content mx-auto max-w-7xl'>
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
