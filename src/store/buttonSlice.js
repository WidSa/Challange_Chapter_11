import { createSlice } from '@reduxjs/toolkit'

export const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    loading: false
  },
  reducers: {
    loadButton: (state) => {
      state.loading = true
    },
    finishLoad: (state) => {
      state.loading = false
    }
  }
})

export const { loadButton, finishLoad } = buttonSlice.actions

export default buttonSlice.reducer
