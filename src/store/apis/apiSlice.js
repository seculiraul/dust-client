import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
  const baseQuey = baseQueryCreator('http://localhost:3001')
  let result = await baseQuey(args, api, extraOptions)

  //if(result?.error?.originalStatus === 403) {
  //      const refreshResult = await baseQuery('/refresh', api, extraOptions)
  //  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
})
