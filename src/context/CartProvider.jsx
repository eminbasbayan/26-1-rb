import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const deleteProduct = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{
            fullName: "Emin Başbayan",
            cartItems,
            setCartItems,
            deleteProduct
        }} >{children}</CartContext.Provider>
    )
}

export default CartProvider;