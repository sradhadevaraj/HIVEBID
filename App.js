import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import FONTS from "./src/constants/Fonts";

import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";

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
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
