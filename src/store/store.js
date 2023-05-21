import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameSlice'
import userReducer from './userSlice'
import buttonReducer from './buttonSlice'

export default configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    button: buttonReducer
  }
})
