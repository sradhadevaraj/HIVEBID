// AppButton

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../../constants/Colors";
import FONTS from "../../constants/Fonts";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  button: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: wp("80%"),
    height: hp("14%"),
    alignSelf: "center",
    elevation: 3,
    marginTop: 45,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
