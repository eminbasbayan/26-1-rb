import Button from '../UI/Button';
import './ProductCard.css';

// component'in ilk parametresi sana bir obje {} verir. sen bunu
// istediğin isimle adlandırabilirsin
function ProductCard(props) {
  const { id: productId, title, price, myImage, desc, deleteProduct } = props;

  return (
    <div className="product-card">
      <img className="product-image" src={myImage} alt="Image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
        <Button
          variant="danger"
          size="sm"
          addClass="product-btn"
          onClick={() => deleteProduct(productId)}
        >
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
