import { RootState } from "src/types/reduxTypes";

export const tokenSelector = (state: RootState) => state.auth.token;
