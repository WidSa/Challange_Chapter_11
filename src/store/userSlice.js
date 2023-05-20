import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.error = null
    },
    loginWithGoogleSuccess: (state, action) => {
      state.user = action.payload
      state.error = null
    },
    loginError: (state, action) => {
      state.user = null
      state.error = action.payload
    },
    registerSuccess: (state, action) => {
      state.user = action.payload
      state.error = null
    },
    registerError: (state, action) => {
      state.user = null
      state.error = action.payload
    },
    logout: (state, action) => {
      state.user = null
      state.error = null
      state.email = null
    }
  }
})

export const { loginSuccess, loginWithGoogleSuccess, loginError, registerSuccess, registerError, logout } = userSlice.actions

export default userSlice.reducer
