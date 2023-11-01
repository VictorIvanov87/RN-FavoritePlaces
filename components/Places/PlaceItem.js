import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={() => onSelect(place.id)} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  address: { color: Colors.gray700, fontSize: 18 },
  image: { borderBottomLeftRadius: 4, borderTopLeftRadius: 4, flex: 1, height: 100 },
  info: { flex: 2, padding: 12 },
  item: {
    alignItems: "flex-start",
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    elevation: 2,
    flexDirection: "row",
    marginVertical: 12
  },
  pressed: { opacity: 0.9 },
  title: { color: Colors.gray700, fontSize: 18, fontWeight: "bold" }
});

export default PlaceItem;
