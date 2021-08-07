import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  TextInput,
} from "react-native";
import FONTS from "../constants/Fonts";
import COLORS from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={styles.headercontainer}>
        <View style={styles.topbar}>
          <Ionicons
            name={"menu"}
            size={26}
            color={COLORS.WHITE}
            style={{ marginLeft: 15 }}
          />
          <Ionicons
            name={"notifications"}
            size={26}
            color={COLORS.WHITE}
            style={{ marginLeft: 15 }}
          />
        </View>
        <View style={styles.searchbar}>
          <Ionicons
            name={"search"}
            size={22}
            color={COLORS.LIGHT_GRAY}
            style={{ marginLeft: 15 }}
          />
          <TextInput
            style={{
              width: setwidth(100),
              height: setheight(100),
              fontSize: 13,
              marginLeft: 10,
            }}
            placeholder="Search for brands and products"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headercontainer: {
    backgroundColor: COLORS.PURPLE,
    width: setwidth(100),
    height: setheight(15),
  },
  searchbar: {
    width: setwidth(90),
    height: setheight(6),
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 25,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  searchtext: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    marginLeft: 5,
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: setwidth(95),
  },
});
