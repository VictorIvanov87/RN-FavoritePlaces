import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./constants/colors";
import IconButton from "./components/UI/IconButton";
import { init } from "./util/database";

import AllPaces from "./screen/AllPlaces";
import AddPlaces from "./screen/AddPlaces";
import Map from "./screen/Map";
import PlaceDetails from "./screen/PlaceDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init().then(() => {
      setDbInitialized(true);
    });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
              headerTintColor: Colors.gray700
            },
            contentStyle: { backgroundColor: Colors.gray700 }
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton color={tintColor} size={24} icon="plus" onPress={() => navigation.navigate("AddPlace")} />
              )
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlaces} options={{ title: "Add a New Place" }} />
          <Stack.Screen name="Map" component={Map} options={{ title: "Select a Point on the Map" }} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{ title: "Loading Place Details..." }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
