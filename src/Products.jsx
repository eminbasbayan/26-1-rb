import ProductCard from './ProductCard.jsx';
import productsData from './productsData';
import './Products.css';

// Ürünlerle ilgili ana parent component
function Products() {
  console.log('productsData: ', productsData);

  console.log([11, 2, 3][0]);

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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
