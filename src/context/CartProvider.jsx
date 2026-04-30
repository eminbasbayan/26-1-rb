import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const deleteProduct = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
        toast.success("Ürün sepetten silindi", {
            position: "top-center"
        });
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