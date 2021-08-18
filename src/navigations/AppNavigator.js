import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import SellScreen from "../screens/SellScreen";
import CreditScreen from "../screens/CreditScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SellButton from "./SellButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: COLORS.PURPLE,
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveBackgroundColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.PURPLE,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={MyOrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SELL"
        component={SellScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <SellButton onPress={() => navigation.navigate("SellScreen")} />
          ),
        })}
      />
      <Tab.Screen
        name="Credit"
        component={CreditScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={29} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
