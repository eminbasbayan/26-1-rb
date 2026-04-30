import React, { useState } from 'react'
import Products from '../components/Products/Products'
import Header from '../components/Layout/Header'

const ProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className='products-page'>
      <Header cartItems={cartItems} />
      <Products setCartItems={setCartItems} />

    </div>
  )
}

export default ProductsPage