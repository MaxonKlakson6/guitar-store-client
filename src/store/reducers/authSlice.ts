import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthInitialState {
  token: string;
}

const initialState: AuthInitialState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
  },
});

export const { saveToken } = authSlice.actions;

export default authSlice.reducer;
