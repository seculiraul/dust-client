import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002',
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (options) => {
        console.log(options)
        return {
          url: '/api/v1/products',
          method: 'GET',
          params: {
            ...options,
          },
        }
      },
    }),
    fetchTest: builder.query({
      query: (param) => {
        return {
          url: '/api/v1/test',
          method: 'GET',
          params: {
            param,
          },
        }
      },
    }),
  }),
})

export const { useFetchProductsQuery, useFetchTestQuery } = productApi
export { productApi }
