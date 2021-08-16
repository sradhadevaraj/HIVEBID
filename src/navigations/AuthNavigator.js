import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AppNavigator from "./AppNavigator";
import SignupScreen from "../screens/SignupScreen";
import ProductScreen from "../screens/ProductScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import SellScreen from "../screens/SellScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreditScreen from "../screens/CreditScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={AppNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Order" component={MyOrderScreen} />
      <Stack.Screen name="Sell" component={SellScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Credit" component={CreditScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
