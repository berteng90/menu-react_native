import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { addFavorite, removeFavorite } from "../store/redux/FavoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const FavoriteButton = ({ meal }) => {
  const [favorite, setFavorite] = useState("white");
  const { ids } = useSelector((state) => state.favorites);

  console.log(ids);
  const dispatch = useDispatch();

  const selectFavoriteHandler = (meal) => {
    if (ids.includes(meal.id)) {
      dispatch(removeFavorite({ id: meal.id }));
      setFavorite("white");
    } else {
      dispatch(addFavorite({ id: meal.id }));
      setFavorite("#f87171");
    }
  };

  return (
    <Pressable
      onPress={() => selectFavoriteHandler(meal)}
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
    >
      <MaterialIcons name="favorite" size={24} color={favorite} />
    </Pressable>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
});
