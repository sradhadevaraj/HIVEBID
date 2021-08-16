import React from "react";
import { StyleSheet, Text, View } from "react-native";

function SellScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SellScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default SellScreen;
