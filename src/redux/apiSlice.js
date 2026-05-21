import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi(
  {
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getFeaturedProducts: builder.query({
      query: () => '/products?limit=3',
    }),
    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFeaturedProductsQuery,
  useGetProductByIdQuery,
  useLoginMutation,
} = apiSlice;
