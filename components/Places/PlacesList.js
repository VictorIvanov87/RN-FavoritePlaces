import { FlatList, View, Text, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet</Text>
      </View>
    );
  }

  return (
    <FlatList data={places} keyExtractor={(item) => item.id} renderItem={({ item }) => <PlaceItem place={item} />} />
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  fallbackText: {
    color: Colors.primary200,
    fontSize: 16
  }
});

export default PlacesList;
