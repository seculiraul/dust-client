import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      return { ...state, user, token }
    },
    logOut: (state, action) => {
      return { ...state, user: null, token: null }
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export { authSlice }

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
