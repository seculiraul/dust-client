import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const orderServiceApi = createApi({
  reducerPath: 'orders',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003' }),

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
      }),
      getOrders: builder.query({
        query: () => {
          return {
            url: '/api/v1/orders/user/current',
            method: 'GET',
          }
        },
      }),
    }
  },
})

export const { useGetOrdersQuery, useAddOrderMutation } = orderServiceApi
export { orderServiceApi }
