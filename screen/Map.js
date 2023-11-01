import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

const Map = ({ navigation, route }) => {
  const initialRegion = route.params && {
    latitude: route.params.initialLat,
    longitude: route.params.initialLng
  };

  const [selectedLocation, setSelectedLocation] = useState(initialRegion);

  const region = {
    latitude: initialRegion ? initialRegion.latitude : 37.78,
    longitude: initialRegion ? initialRegion.longitude : -122,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = (event) => {
    if (initialRegion) return;
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ latitude, longitude });
  };

  const savePickerLocationHandler = useCallback(() => {
    if (!selectLocationHandler) {
      Alert.alert("No location picked!", "You have to pick a location by tapping on the map first.");
      return;
    }

    navigation.navigate("AddPlace", selectedLocation);
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialRegion) return;

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton color={tintColor} icon="save" size={24} onPress={savePickerLocationHandler} />
      )
    });
  }, [initialRegion, navigation, savePickerLocationHandler]);

  return (
    <MapView initialRegion={region} style={styles.map} onPress={selectLocationHandler}>
      {selectedLocation && <Marker coordinate={selectedLocation} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default Map;
