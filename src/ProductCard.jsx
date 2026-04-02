import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://karatayberraksu.com.tr/wp-content/uploads/2019/03/5lt-buyuk.png"
        alt="Image"
      />
      <div className="product-info">
        <strong className="product-name">Büyük Su</strong>
        <span class="product-price">20₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
