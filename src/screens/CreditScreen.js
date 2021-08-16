import React from "react";
import { StyleSheet, Text, View } from "react-native";

function CreditScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>CreditScreen</Text>
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

export default CreditScreen;
