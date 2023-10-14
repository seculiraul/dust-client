import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
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
      providesTags: ['FETCH_PRODUCTS'],
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
    editProduct: builder.mutation({
      query: (params) => {
        return {
          url: `/api/v1/products/${params.id}`,
          method: 'PATCH',
          body: params.editProduct,
        }
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/products/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['FETCH_PRODUCTS'],
    }),
  }),
})

export const {
  useFetchProductsQuery,
  useFetchRecomandedProductsQuery,
  useFetchSingleProductQuery,
  useCreateProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi
export { productApi }
