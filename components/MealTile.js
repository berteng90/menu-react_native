import {
  Pressable,
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

const MealTile = ({ meal, onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.gridItem,
          pressed ? styles.gridPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.mealImage}
          resizeMode="cover"
        />
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.mealTitleContainer}>
            <Text style={styles.mealTitle}>{meal.title}</Text>
          </View>
          <View style={styles.mealTextContainer}>
            <Text style={styles.mealText}>{meal.duration}m</Text>
            <Text style={styles.mealText}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.mealText}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridPressed: {
    opacity: 0.5,
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 250,
    width: "90%",
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : ' "visible"',
  },
  mealImage: {
    flex: 1,
  },

  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },

  mealTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  mealText: {
    marginHorizontal: 4,
  },
  mealTextContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    padding: 8,
  },
});
