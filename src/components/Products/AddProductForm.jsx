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
    category: '',
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(Object.keys(product));
    console.log(Object.values(product));
    console.log(Object.entries(product));

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== '',
    );

    if (!isFormValid) {
      alert('Inputlar Boş Geçilemez!');
      return;
    }
    const newProduct = { ...product, id: Math.random() };
    addNewProduct(newProduct);
    setProduct({
    title: '',
    image: '',
    price: '',
    description: '',
    category: '',
  })
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput key={input.name} {...input} handleChange={handleChange} value={product[input.name]} />
      ))}

      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
