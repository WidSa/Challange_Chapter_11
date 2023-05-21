import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    playedGame1: true,
    playedGame2: false,
    playedGame3: false
  },
  reducers: {
    playedGame1: (state) => {
      state.playedGame1 = true
    },
    playedGame2: (state) => {
      state.playedGame2 = true
    },
    playedGame3: (state) => {
      state.playedGame3 = true
    }
  }
})

export const { playedGame1, playedGame2, playedGame3 } = gameSlice.actions

export default gameSlice.reducer
