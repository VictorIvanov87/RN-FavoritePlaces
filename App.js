import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./constants/colors";

import AllPaces from "./screen/AllPlaces";
import AddPlaces from "./screen/AddPlaces";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
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
                <IconButton color={tintColor} size={24} icon="plus" onPress={() => navigation.navigate("AddPlaces")} />
              )
            })}
          />
          <Stack.Screen name="AddPlaces" component={AddPlaces} options={{ title: "Add a New Place" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
