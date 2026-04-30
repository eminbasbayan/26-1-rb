import { CartContext } from "./CartContext";

const CartProvider = ({children})=> {
    return (
   <CartContext.Provider value={{
    fullName: "Emin Başbayan"
   }} >{children}</CartContext.Provider>
    )
}

export default CartProvider;