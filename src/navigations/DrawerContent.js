import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import COLORS from "../constants/Colors";

function DrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.PURPLE}
      />
      <Text>HI</Text>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
});
