import { StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <AntDesign name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    padding: 8
  },
  pressed: {
    opacity: 0.75
  }
});

export default IconButton;
