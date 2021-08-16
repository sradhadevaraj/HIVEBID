import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./src/navigations/DrawerContent";

const Drawer = createDrawerNavigator();
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
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="AuthNavigator" component={AuthNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
