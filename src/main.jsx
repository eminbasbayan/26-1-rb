import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import CartProvider from './context/CartProvider';
import store from './redux/store';
import './index.css';

createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </ReduxProvider>,
);
