import ProductCard from './ProductCard.jsx';
import productsData from '../../productsData.js';
import './Products.css';
import AddProductForm from './AddProductForm.jsx';

// Ürünlerle ilgili ana parent component
function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddProductForm />
      <div className="products-wrapper">
        {productsData.map((product) => {
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
