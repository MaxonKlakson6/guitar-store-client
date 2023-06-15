import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthInitialState {
  token: string;
  isSignedIn: boolean;
  isUpdated: boolean;
}

const initialState: AuthInitialState = {
  token: "",
  isSignedIn: false,
  isUpdated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
      state.isUpdated = true;
    },
    signIn: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
      state.isSignedIn = true;
    },
    updateSignInStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isSignedIn = payload;
    },
    setToInitialState: (state) => {
      state.token = "";
      state.isSignedIn = false;
    },
  },
});

export const { saveToken, signIn, updateSignInStatus, setToInitialState } =
  authSlice.actions;

export default authSlice.reducer;
