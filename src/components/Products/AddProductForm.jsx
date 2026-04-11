import { useState } from 'react';
import ProductInput from './ProductInput';
import Button from '../UI/Button';
import { productInputs } from '../../data/productInputs';
import './AddProductForm.css';

function AddProductForm({ addNewProduct }) {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    description: '',
  });

  console.log(product);

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = { ...product, id: Math.random() };
    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput
          key={input.name}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          handleChange={handleChange}
        />
      ))}

      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
