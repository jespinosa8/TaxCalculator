import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getUserDetails = createAsyncThunk(
    'userDetails/getByUserId',
    async(userId: number) => {
        // get request for userDetails by id
    }
)

const userDetailSlice = createSlice({
    name: 'userDetails',
    initialState: {
        userDetail: null,
        error: null
    },
    reducers: {
        
    }
})

export default userDetailSlice.reducer;