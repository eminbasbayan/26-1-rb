import { createRoot } from 'react-dom/client';
import App from './App';
import CartProvider from './context/CartProvider';
import "./index.css";

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>
);
