import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => {
        return {
          url: '/api/auth/signup',
          method: 'POST',
          body: credentials,
        }
      },
    }),
    signIn: builder.mutation({
      query: (data) => {
        const { email, password } = data
        console.log({ email, password })
        return {
          url: '/api/auth/signin',
          method: 'POST',
          body: { email, password },
        }
      },
    }),
    getUserDetails: builder.query({
      query: (data) => {
        return {
          url: 'api/auth/details',
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation, useGetUserDetailsQuery } =
  userApi
export { userApi }
