import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const getPosts = createAsyncThunk("posts/getPosts", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
