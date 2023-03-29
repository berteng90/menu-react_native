import { StyleSheet, Text, View, FlatList } from "react-native";
import MealTile from "../components/MealTile";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  const { ids } = useSelector((state) => state.favorites);
  const meal = MEALS.filter((meal) => ids.includes(meal.id));

  const renderMeals = (meal, navigation) => {
    return (
      <MealTile meal={meal} onPress={() => handlePress(meal, navigation)} />
    );
  };

  const handlePress = (meal, navigation) => {
    navigation.navigate("Meals", {
      meal: meal,
    });
  };

  if (meal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.rootText}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={meal}
        renderItem={({ item }) => renderMeals(item, navigation)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#292524",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292524",
  },
  rootText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
