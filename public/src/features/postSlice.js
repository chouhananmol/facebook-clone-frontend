import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: []
    },
    reducers: {
        addPost: (state, action) => {
            state.value.unshift(action.payload);
        },
        addAllPosts: (state, action) => {
            state.value.push(...action.payload);
        },
        addPost: (state, action) => {
            state.value.unshift(action.payload);
        },
        clearPosts: (state) => {
            state.value = [];
        }
    }
});

export const { addPost, addAllPosts, clearPosts } = postSlice.actions;

export const selectPosts = (state) => state.post.value;

export default postSlice.reducer;


