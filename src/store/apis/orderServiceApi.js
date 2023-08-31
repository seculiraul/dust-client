import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const orderServiceApi = createApi({
  reducerPath: 'orders',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3003',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints(builder) {
    return {
      addOrder: builder.mutation({
        query: (order) => {
          return {
            url: '/api/v1/orders',
            method: 'POST',
            body: order,
          }
        },
        invalidatesTags: ['getOrders'],
      }),
      getOrders: builder.query({
        query: () => {
          return {
            url: '/api/v1/orders/user/current',
            method: 'GET',
          }
        },
        providesTags: ['getOrders'],
      }),
    }
  },
})

export const { useGetOrdersQuery, useAddOrderMutation } = orderServiceApi
export { orderServiceApi }
