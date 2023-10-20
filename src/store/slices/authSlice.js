import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload
      const { email, name, role } = jwtDecode(token)
      localStorage.setItem('user', JSON.stringify({ email, name, role }))
      //localStorage.setItem('token', token)
      return { ...state, user: { email, name, role }, token }
    },
    logOut: (state, action) => {
      localStorage.removeItem('user')
      //localStorage.removeItem('token')
      return { ...state, user: null, token: null }
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export { authSlice }

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
