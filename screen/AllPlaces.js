import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getPlacesFromDb = async () => {
      if (isFocused) {
        const places = await fetchPlaces();
        setLoadedPlaces(places);
      }
    };

    getPlacesFromDb();
  }, [isFocused, fetchPlaces]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
