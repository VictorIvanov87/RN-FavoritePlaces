import { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { launchCameraAsync } from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = () => {
  const [image, setImage] = useState();

  const takeImageHandler = async () => {
    const imageData = await launchCameraAsync({ allowsEditing: true, aspect: [16, 9], quality: 0.5 });
    setImage(imageData.assets[0]);
  };

  return (
    <View>
      <Text>ImagePicker</Text>
      <View style={styles.imagePreview}>
        {image ? <Image style={styles.image} source={{ uri: image.uri }} /> : <Text>No image taken yet</Text>}
      </View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take image
      </OutlinedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%"
  },
  imagePreview: {
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    height: 200,
    justifyContent: "center",
    marginVertical: 8,
    width: "100%"
  }
});

export default ImagePicker;
