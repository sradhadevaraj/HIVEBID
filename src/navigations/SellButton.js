// SellButton

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Colors";

function SellButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={COLORS.WHITE}
          size={40}
        />
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
          color: COLORS.PURPLE,
        }}
      >
        SELL
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: 40,
    width: wp("20%"),
    height: hp("20%"),
    bottom: 40,
    borderColor: COLORS.WHITE,
    borderWidth: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SellButton;
