import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider value={{
            fullName: "Emin Başbayan",
            cartItems,
            setCartItems
        }} >{children}</CartContext.Provider>
    )
}

export default CartProvider;