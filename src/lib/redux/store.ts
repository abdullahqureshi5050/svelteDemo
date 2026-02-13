//src/lib/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog/blogSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    auth: authReducer
  }
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
