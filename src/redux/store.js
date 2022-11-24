import { configureStore } from '@reduxjs/toolkit'
import burgerSlice from './burgerSlice'
export const store = configureStore({
    reducer: {
        burger : burgerSlice
    },
  })