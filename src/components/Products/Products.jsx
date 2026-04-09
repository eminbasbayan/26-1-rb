import ProductCard from './ProductCard.jsx';
import productsData from '../../productsData.js';
import './Products.css';

// Ürünlerle ilgili ana parent component
function Products({productTitle, setProductTitle}) {

  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              myImage={product.image}
              title={product.title}
              price={product.price}
              desc={product.description}
              productTitle={productTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
