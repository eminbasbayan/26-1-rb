import ProductCard from './ProductCard.jsx';
import productsData from '../../productsData.js';
import './Products.css';
import AddProductForm from './AddProductForm.jsx';
import { useState } from 'react';

// Ürünlerle ilgili ana parent component
function Products() {
  const [products, setProducts] = useState(productsData);

  function addNewProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddProductForm addNewProduct={addNewProduct} />
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              myImage={product.image}
              title={product.title}
              price={product.price}
              desc={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
