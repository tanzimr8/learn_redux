import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI";

const initialState = {
    posts:[],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const posts = await getPosts();
    return posts;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending, (state,action)=>{
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchPosts.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.error = action.error?.message;
        })
    }
});

export default postsSlice.reducer;