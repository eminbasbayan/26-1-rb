import api from './api';

export const getProducts = () => {
  return api.get('/products');
};

export const getFeaturedProducts = () => {
  return api.get('/products', {
    params: {
      limit: 3,
    },
  });
};

export const getProductById = (productId) => {
  return api.get(`/products/${productId}`)
}