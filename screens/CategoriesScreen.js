import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
const renderFlatListItems = (item, navigation) => {
  const pressHandler = (category, id, navigation) => {
    navigation.navigate("MealsOverview", {
      categoryId: id,
      category: category,
    });
  };
  return (
    <CategoryGridTile
      id={item.id}
      title={item.title}
      color={item.color}
      onPress={() => pressHandler(item.title, item.id, navigation)}
    />
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      style={styles.rootContainer}
      data={CATEGORIES}
      renderItem={({ item }) => renderFlatListItems(item, navigation)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#292524",
  },
});
