import { useState } from "react";
import { StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, selectedImage.uri, pickedLocation);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={setEnteredTitle} value={enteredTitle} />
        <ImagePicker onImageTaken={setSelectedImage} />
        <LocationPicker onLocationPick={setPickedLocation} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
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
