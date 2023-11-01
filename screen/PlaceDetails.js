import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

const PlaceDetails = ({ route, navigation }) => {
  const selectedPlaceId = route.params.placeId;
  const [placeData, setPlaceData] = useState();

  const showOnMapHandler = () => {
    navigation.navigate("Map", {
      initialLat: placeData.location.lat,
      initialLng: placeData.location.lng
    });
  };

  useEffect(() => {
    const loadPlaceData = async () => {
      if (selectedPlaceId) {
        const result = await fetchPlaceDetails(selectedPlaceId);
        setPlaceData(result);
        navigation.setOptions({ title: result.title });
      }
    };

    loadPlaceData();
  }, [selectedPlaceId, fetchPlaceDetails]);

  if (!placeData) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeData.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeData.address}</Text>
        </View>
        <OutlinedButton icon="enviroment" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  address: {
    color: Colors.primary500,
    fontSize: 16,
    textAlign: "center"
  },
  addressContainer: {
    padding: 20
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%"
  },
  locationContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PlaceDetails;
