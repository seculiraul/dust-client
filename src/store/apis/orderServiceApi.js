import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const orderServiceApi = createApi({
  reducerPath: 'orders',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003' }),

  endpoints(builder) {
    return {
      addOrder: builder.mutation({
        query: (products, transportCost, info) => {
          const order = {
            products: products.map((prod) => {
              return {
                productId: prod.id,
                quantity: prod.quantity,
              }
            }),
            total:
              products
                .map((product) => product.price * product.quantity)
                .reduce((prev, crt) => prev + crt, 0) + transportCost,
            ...info,
          }
          return {
            url: '/api/v1/orders/user/current',
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
