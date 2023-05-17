import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authSlice } from './slices/authSlice'
import { apiSlice } from './apis/apiSlice'
import { orderServiceApi } from './apis/orderServiceApi'
import { productApi } from './apis/productApi'
import { userApi } from './apis/userApi'
import { queryParamSlice } from './slices/queryParamSlice'

export const store = configureStore({
  reducer: {
    [orderServiceApi.reducerPath]: orderServiceApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    queryParam: queryParamSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(orderServiceApi.middleware)
      .concat(userApi.middleware)
      .concat(productApi.middleware)
      .concat(apiSlice.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

export { useGetOrdersQuery, useAddOrderMutation } from './apis/orderServiceApi'
export { useSignUpMutation, useSignInMutation } from './apis/userApi'
export { useFetchProductsQuery, useFetchTestQuery } from './apis/productApi'
