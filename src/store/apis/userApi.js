import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
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
    signOut: builder.mutation({
      query: () => {
        return {
          url: '/api/auth/signout',
          method: 'GET',
        }
      },
    }),
    getUserDetails: builder.query({
      query: () => {
        return {
          url: 'api/auth/details',
          method: 'GET',
        }
      },
      providesTags: ['UserDetails'],
    }),
    updateUserDetails: builder.mutation({
      query: (userDetails) => {
        return {
          url: 'api/auth/details',
          method: 'PATCH',
          body: userDetails,
        }
      },
      invalidatesTags: ['UserDetails'],
    }),
  }),
})

export const {
  useSignUpMutation,
  useSignOutMutation,
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
} = userApi
export { userApi }
