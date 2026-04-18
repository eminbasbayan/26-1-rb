import { useEffect, useReducer } from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductCard from './ProductCard.jsx';
import Modal from '../UI/Modal.jsx';
import './Products.css';
import { initialState, reducerFunction } from './productReducer.js';

function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'GET_PRODUCTS', products: data }))
      .catch((err) => console.log(err))
      .finally(() => dispatch({ type: 'CLOSE_LOADING' }));
  }, []);

  return (
    <div className="products">
      <AddProductForm
        addNewProduct={(newProduct) =>
          dispatch({ type: 'ADD_NEW_PRODUCTS', newProduct })
        }
        setIsShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
      />
      <div className="products-wrapper">
        {state.isLoading && <b>Ürünler Yükleniyor!</b>}
        {state.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              myImage={product.image}
              title={product.title}
              price={product.price}
              desc={product.description}
              id={product.id}
              deleteProduct={(productId) =>
                dispatch({ type: 'DELETE_PRODUCT', productId })
              }
            />
          );
        })}
      </div>
      {state.isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş geçilemez!"
          onCloseModal={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
}

export default Products;
