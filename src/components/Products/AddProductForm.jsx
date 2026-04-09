import { useState } from 'react';
import Button from '../UI/Button';
import './AddProductForm.css';

function AddProductForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  return (
    <form className="add-product-form">
      <label>
        Title: {title}
        <input
          type="text"
          placeholder="Bir ürün ismi giriniz!"
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Image URL: {image}
        <input
          type="text"
          placeholder="Bir ürün görseli giriniz!"
          onChange={handleImageChange}
        />
      </label>
      <label>
        Price: {price}
        <input
          type="number"
          placeholder="Bir ürün fiyatı giriniz!"
          onChange={handlePriceChange}
        />
      </label>
      <label>
        Description: {description}
        <input
          type="text"
          placeholder="Bir ürün açıklaması giriniz!"
          onChange={handleDescriptionChange}
        />
      </label>

      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
