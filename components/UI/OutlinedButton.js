import { StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

const OutlinedButton = ({ icon, onPress, children }) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <AntDesign name={icon} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: Colors.primary500,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  icon: { color: Colors.primary500, marginRight: 6 },
  pressed: {
    opacity: 0.75
  },
  text: {
    color: Colors.primary500
  }
});

export default OutlinedButton;
