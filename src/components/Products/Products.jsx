import ProductCard from './ProductCard.jsx';
import productsData from '../../productsData.js';
import './Products.css';
import AddProductForm from './AddProductForm.jsx';
import { useState } from 'react';

// Ürünlerle ilgili ana parent component
function Products() {
  const [products, setProducts] = useState(productsData);

  function addNewProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  function deleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId,
    );

    setProducts(filteredProducts);
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
              id={product.id}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
