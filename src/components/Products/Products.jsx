import { useEffect, useReducer } from 'react';
import AddProductForm from './AddProductForm.jsx';
import ProductCard from './ProductCard.jsx';
import Modal from '../UI/Modal.jsx';
import './Products.css';
import { initialState, reducerFunction } from './productReducer.js';
import { useGetProductsQuery } from '../../redux/apiSlice.js';

function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCTS', products });
  }, [products]);

  return (
    <div className="products">
      <AddProductForm
        addNewProduct={(newProduct) =>
          dispatch({ type: 'ADD_NEW_PRODUCTS', newProduct })
        }
        setIsShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
      />
      <div className="products-wrapper">
        {isLoading && <b>Ürünler Yükleniyor!</b>}
        {isError && <b>Ürünler yüklenirken hata oluştu!</b>}
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
