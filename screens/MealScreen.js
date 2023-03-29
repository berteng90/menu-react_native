import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import FavoriteButton from "../components/FavoriteButton";
import { useLayoutEffect } from "react";

const renderItems = (item) => {
  return item.map((instruction, index) => (
    <View key={index} style={styles.ingredientContainer}>
      <Text style={{ paddingHorizontal: 16, color: "white" }}>
        {instruction}
      </Text>
    </View>
  ));
};

const MealScreen = ({ navigation, route }) => {
  const { meal } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <FavoriteButton meal={meal} />,
    });
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: meal.imageUrl }}
            style={styles.mealImage}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.mealTitle}>{meal.title}</Text>
        </View>
        <View style={styles.mealDetailsContainer}>
          <Text style={styles.mealsDetailsText}>{meal.duration}m</Text>
          <Text style={styles.mealsDetailsText}>{meal.complexity}</Text>
          <Text style={styles.mealsDetailsText}>{meal.affordability}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Ingredients</Text>
          <View style={styles.ingredientsContainer}></View>
          {renderItems(meal.ingredients)}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Steps</Text>
          <View style={styles.ingredientsContainer}></View>
          {renderItems(meal.steps)}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#292524",
  },
  imageContainer: {
    marginBottom: 16,
    height: 350,
    width: "100%",
  },
  mealImage: {
    flex: 1,
  },

  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  mealsDetailsText: {
    marginHorizontal: 8,
    color: "white",
  },
  mealDetailsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  detailsContainer: {
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },

  detailsText: {
    color: "white",
    fontSize: 26,
  },
  ingredientsContainer: {
    width: "90%",
    borderWidth: 1.5,
    borderBottomColor: "#78716c",
  },

  ingredientContainer: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#78716c",
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
