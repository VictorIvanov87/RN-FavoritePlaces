import { Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const Button = ({ onPress, children }) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary800,
    borderRadius: 4,
    elevation: 2,
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  pressed: { opacity: 0.75 },
  text: {
    color: Colors.primary50,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Button;
