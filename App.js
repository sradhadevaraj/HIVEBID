import React from "react";
import { StyleSheet } from "react-native";
import FONTS from "../constants/Fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

export default function App() {
  const [fontloaded] = useFonts({
    Black: require("./assets/fonts/Roboto-Black.ttf"),
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Light: require("./assets/fonts/Roboto-Light.ttf"),
    Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    Thin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  return fontloaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => {
            return {
              headerShown: false,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
const styles = StyleSheet.create({
  topbar: {},
});
