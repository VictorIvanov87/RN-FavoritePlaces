import { useState } from "react";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import { getMapPreview } from "../../util/location";

const LocationPicker = () => {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [userLocation, setUserLocation] = useState();

  const verifyPermissions = async () => {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const res = await requestPermission();

      return res.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Infficient Permissions!", "You need to grant location permissions to use this app.");

      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const result = await getCurrentPositionAsync();

    setUserLocation({ lat: result.coords.latitude, lng: result.coords.longitude });
  };

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}>
        {userLocation ? (
          <Image style={styles.image} source={{ uri: getMapPreview(userLocation) }} />
        ) : (
          <Text>No location selected yet.</Text>
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="find" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="enviroment" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },

  image: { borderRadius: 4, height: "100%", width: "100%" },
  mapPreview: {
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    height: 200,
    justifyContent: "center",
    marginVertical: 8,
    width: "100%"
  }
});

export default LocationPicker;
