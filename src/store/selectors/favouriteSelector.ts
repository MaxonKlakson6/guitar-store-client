import { RootState } from "src/types/reduxTypes";

export const favouriteSelector = (state: RootState) =>
  state.favourite.favouriteObject;
