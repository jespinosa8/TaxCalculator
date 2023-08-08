import { configureStore } from "@reduxjs/toolkit"
import userReducer from './slices/UserSlice'
import userDetailReducer from './slices/UserDetailSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        userDetail: userDetailReducer
    }
});

export type AppDispatch = typeof store.dispatch // exporting type of the dispatch function

export default store