import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counter";
import ProductReducer from "./productSlice"
export const store = configureStore({
  reducer: {
    "counter":counterReducer,
    product:ProductReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch