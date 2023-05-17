const { createSlice } = require('@reduxjs/toolkit')

const queryParamSlice = createSlice({
  name: 'queryParam',
  initialState: {},
  reducers: {
    addQueryParam: (state, action) => {
      const { name, value } = action.payload
      //const obj = { ...state }
      if ([name] in state) {
        state[name].push(value)
      } else {
        state[name] = [value]
      }
      return state
    },
    removeQueryParam: (state, action) => {
      const { name, value } = action.payload

      const index = state[name].indexOf(value)
      state[name].splice(index, 1)
      if (state[name].length < 1) {
        delete state[name]
      }
      return state
    },
  },
})

export const { addQueryParam, removeQueryParam } = queryParamSlice.actions

export { queryParamSlice }
