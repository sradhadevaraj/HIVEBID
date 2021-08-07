import React from "react";
import { View, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";

const { width, height } = Dimensions.get("screen");

const setwidth = (w) => (width / 100) * w;
const setheight = (h) => (height / 100) * h;

const Stack = createStackNavigator();

function AppStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;
