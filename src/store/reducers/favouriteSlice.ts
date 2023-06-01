import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavouritesObject } from "src/types/products";

export interface FavouriteInitialState {
  favouriteObject: FavouritesObject;
}

const initialState: FavouriteInitialState = {
  favouriteObject: {},
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    saveFavourite: (state, { payload }: PayloadAction<FavouritesObject>) => {
      state.favouriteObject = payload;
    },
  },
});

export const { saveFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
