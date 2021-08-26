// MyOrderScreen

import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MyOrderScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>MyOrderScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
});

export default MyOrderScreen;
