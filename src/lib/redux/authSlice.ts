import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: {
    id: string;
    name: string;
  } | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  isAdmin: false,
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        user: { id: string; name: string };
        isAdmin?: boolean;
      }>
    ) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.isAdmin = !!action.payload.isAdmin;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.user = null;
    },
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
