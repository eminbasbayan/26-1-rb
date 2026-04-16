import { useEffect, useState } from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductCard from './ProductCard.jsx';
import Modal from '../UI/Modal.jsx';
import './Products.css';

// Ürünlerle ilgili ana parent component
function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  function addNewProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  function deleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId,
    );

    setProducts(filteredProducts);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              myImage={product.image}
              title={product.title}
              price={product.price}
              desc={product.description}
              id={product.id}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
      {isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş geçilemez!"
          onCloseModal={() => setIsShowModal(false)}
        />
      )}
    </div>
  );
}

export default Products;
