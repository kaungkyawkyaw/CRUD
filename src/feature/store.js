import { configureStore } from '@reduxjs/toolkit'
import { exampleApi } from './services/exampleApi'
import exampleSlice from './services/exampleSlice'

export const store = configureStore({
  reducer: {
    example:exampleSlice,

    [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(exampleApi.middleware),
})