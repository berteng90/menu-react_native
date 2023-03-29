import { MEALS } from "../data/dummy-data";
import { StyleSheet, FlatList } from "react-native";
import MealTile from "../components/MealTile";
import { useEffect } from "react";

const pressHandler = (item, navigation) => {
  navigation.navigate("Meals", {
    meal: item,
  });
};
const MealsOverviewScreen = ({ navigation, route }) => {
  const { categoryId, category } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: category, backTitle: category });
  }, [category]);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderFlatListItems = (item) => {
    return (
      <MealTile meal={item} onPress={() => pressHandler(item, navigation)} />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={meals}
      renderItem={({ item }) => renderFlatListItems(item)}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292524",
  },
});
