import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002',
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (options) => {
        return {
          url: '/api/v1/products',
          method: 'GET',
          params: {
            ...options,
          },
        }
      },
    }),
    fetchRecomandedProducts: builder.query({
      query: (param) => {
        return {
          url: '/api/v1/recomanded',
          method: 'GET',
        }
      },
    }),
    fetchSingleProduct: builder.query({
      query: (code) => {
        return {
          url: `/api/v1/products/${code}`,
          method: 'GET',
        }
      },
    }),
    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: '/api/v1/products',
          method: 'POST',
          body: product,
        }
      },
    }),
  }),
})

export const {
  useFetchProductsQuery,
  useFetchRecomandedProductsQuery,
  useFetchSingleProductQuery,
  useCreateProductMutation,
} = productApi
export { productApi }
