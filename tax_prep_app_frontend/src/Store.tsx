import { configureStore } from "@reduxjs/toolkit"
import userReducer from './slices/UserSlice'

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export type AppDispatch = typeof store.dispatch // exporting type of the dispatch function

export default store