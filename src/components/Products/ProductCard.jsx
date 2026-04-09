import { useState } from 'react';
import './ProductCard.css';

// component'in ilk parametresi sana bir obje {} verir. sen bunu
// istediğin isimle adlandırabilirsin
function ProductCard(props) {
  const { myImage, title, price, desc, productTitle } = props;

  return (
    <div className="product-card">
      {/*  <img className="product-image" src={myImage} alt="Image" /> */}
      <div className="product-info">
        <strong className="product-title">{productTitle}</strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
      </div>
    </div>
  );
}

export default ProductCard;
