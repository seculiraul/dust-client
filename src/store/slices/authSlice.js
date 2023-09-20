import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload
      const { email, name, role } = jwtDecode(token)
      return { ...state, user: { email, name, role }, token }
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
