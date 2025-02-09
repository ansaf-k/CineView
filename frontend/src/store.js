import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slice/apiSlice'
import authReducer from './slice/authSlice'
import movieReducer from './slice/movieSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})
