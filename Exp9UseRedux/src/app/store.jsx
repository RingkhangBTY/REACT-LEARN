import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Features/movieSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});