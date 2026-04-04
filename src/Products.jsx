import ProductCard from './ProductCard';
import './Products.css';

// Ürünlerle ilgili ana parent component
function Products() {
  const image =
    'https://karatayberraksu.com.tr/wp-content/uploads/2019/03/5lt-buyuk.png';
  const title = 'Büyük Su';
  const price = 20;

  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard myImage={image} title={title} price={price} />
        <ProductCard myImage={image} title={"Küçük Su"} price={10} />
        <ProductCard myImage={image} title={title} price={price} />
        <ProductCard myImage={image} title={title} price={price} />
        <ProductCard myImage={image} title={title} price={price} />
       
      </div>
    </div>
  );
}

export default Products;
