import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logOut, setCredentials } from '../slices/authSlice'

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:3001',
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }
//     return headers
//   },
// })

const baseQueryCreator = (url) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })
  return baseQuery
}

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const baseQuery = baseQueryCreator('http://localhost:3001')
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token')

    const refreshResult = await baseQuery(
      '/api/auth/refresh',
      api,
      extraOptions
    )

    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setCredentials({ ...refreshResult.data, user }))

      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
})
