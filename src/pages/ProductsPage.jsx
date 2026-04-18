import React from 'react'
import Products from '../components/Products/Products'
import Header from '../components/Layout/Header'

const ProductsPage = () => {
  return (
    <div className='products-page'>
        <Header />
        <Products />
    </div>
  )
}

export default ProductsPage