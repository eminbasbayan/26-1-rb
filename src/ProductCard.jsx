function ProductCard() {
  return (
    <div className="product-card" style={{
        backgroundColor: "red",
        color: "white"
    }}>
      <img src="https://karatayberraksu.com.tr/wp-content/uploads/2019/03/5lt-buyuk.png" alt="Image" />
      <strong>Büyük Su</strong>
      <span>20₺</span>
    </div>
  );
}

export default ProductCard;
