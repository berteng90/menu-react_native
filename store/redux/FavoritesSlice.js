import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { id } = action.payload;
      state.ids.push(id);
    },
    removeFavorite: (state, action) => {
      const { id } = action.payload;
      state.ids = state.filter((meal) => meal.id !== id);
    },
  },
});

export const { addFavorite, removeFavorite } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
