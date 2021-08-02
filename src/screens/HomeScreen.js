import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import FONTS from "../constants/Fonts";
import COLORS from "../constants/Colors";

const { width, height } = Dimensions.get("screen");

const setwidth = (w) => (width / 100) * w;
const setheight = (h) => (height / 100) * h;

export default function App({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.PURPLE}
      />
      <View style={styles.topbar}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topbar: {
    backgroundColor: COLORS.PURPLE,
    width: setwidth(100),
    height: setheight(15),
  },
});
