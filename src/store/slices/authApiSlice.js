import { apiSlice } from '../apis/apiSlice'
import authSlice from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/signin',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApiSlice
