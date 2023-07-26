import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type userCredentials = {
    username: string;
    password: string;
}

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async(userCredentials: userCredentials) => {
        // fetch request for login backend goes here
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        
    }
})

export default userSlice.reducer;