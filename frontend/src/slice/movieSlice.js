import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "944cdd190650ca9f1b9edc47da5d7b72";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (category) => {
    const response = await axios.get(`${BASE_URL}/${category}?api_key=${API_KEY}`);
    return response.data.results;
});

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        category: "popular",
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setCategory } = movieSlice.actions;
export default movieSlice.reducer;