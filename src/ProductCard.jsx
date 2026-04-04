import './ProductCard.css';

function ProductCard() {
  const image =
    'https://karatayberraksu.com.tr/wp-content/uploads/2019/03/5lt-buyuk.png';
  const title = 'Büyük Su';
  const price = 20000;

  const toplam = price + 1000;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span class="product-price">{toplam}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
