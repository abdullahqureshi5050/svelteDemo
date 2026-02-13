//src/lib/redux/blogSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
};

type BlogState = {
  post: BlogPost | null;
  status: "idle" | "loading" | "loaded" | "error";
};

const initialState: BlogState = {
  post: null,
  status: "idle"
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    loading(state) {
      state.status = "loading";
    },
    loaded(state, action: PayloadAction<BlogPost>) {
      state.post = action.payload;
      state.status = "loaded";
    },
    error(state) {
      state.status = "error";
    }
  }
});

export const { loading, loaded, error } = blogSlice.actions;
export default blogSlice.reducer;
