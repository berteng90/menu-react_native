import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from "./redux/FavoritesSlice";
export const store = configureStore({
  reducer: { favorites: FavoritesSlice },
});
