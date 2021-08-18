import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AppNavigator from "../navigations/AppNavigator";
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
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={AppNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
      <Stack.Screen name="SellScreen" component={SellScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="CreditScreen" component={CreditScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
