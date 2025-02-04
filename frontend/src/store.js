import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slice/apiSlice'
import authReducer from './slice/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})
