import { useState } from 'react';
import Button from '../UI/Button';
import './AddProductForm.css';

function AddProductForm() {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    description: '',
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  return (
    <form className="add-product-form">
      <label>
        Title: {product.title}
        <input
          type="text"
          placeholder="Bir ürün ismi giriniz!"
          name="title"
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL: {product.image}
        <input
          type="text"
          placeholder="Bir ürün görseli giriniz!"
          name="image"
          onChange={handleChange}
        />
      </label>
      <label>
        Price: {product.price}
        <input
          type="number"
          placeholder="Bir ürün fiyatı giriniz!"
          name="price"
          onChange={handleChange}
        />
      </label>
      <label>
        Description: {product.description}
        <input
          type="text"
          placeholder="Bir ürün açıklaması giriniz!"
          name="description"
          onChange={handleChange}
        />
      </label>

      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
