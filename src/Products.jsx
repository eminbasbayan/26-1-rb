import ProductCard from './ProductCard';
import "./Products.css";

// Ürünlerle ilgili ana parent component
function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
