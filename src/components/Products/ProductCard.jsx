import { useNavigate } from 'react-router';

import Button from '../UI/Button';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

// component'in ilk parametresi sana bir obje {} verir. sen bunu
// istediğin isimle adlandırabilirsin
function ProductCard(props) {
  const { id: productId, title, price, myImage, desc, deleteProduct } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        className="product-image cursor-pointer"
        src={myImage}
        alt="Image"
        onClick={() => navigate(`/product-detail/${productId}`)}
      />
      <div className="product-info">
        <strong
          className="product-title cursor-pointer"
          onClick={() => navigate(`/product-detail/${productId}`)}
        >
          {title}
        </strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
        <Button
          variant="primary"
          size="sm"
          addClass="product-btn"
          onClick={() =>
            dispatch(addToCart({ id: productId, title, price, myImage, desc }))
          }
        >
          Sepete Ekle
        </Button>
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
