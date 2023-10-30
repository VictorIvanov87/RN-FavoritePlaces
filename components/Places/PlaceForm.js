import { useState } from "react";
import { StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState();

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={setEnteredTitle} value={enteredTitle} />
        <ImagePicker />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  input: {
    backgroundColor: Colors.primary100,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    fontSize: 16,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8
  },
  label: {
    color: Colors.primary500,
    fontWeight: "bold",
    marginBottom: 4
  }
});

export default PlaceForm;
