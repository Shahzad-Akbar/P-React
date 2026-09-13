import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counter/counterSlice.js'

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  },
})