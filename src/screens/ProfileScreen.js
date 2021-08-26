// ProfileScreen

import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>ProfileScreen</Text>
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

export default ProfileScreen;
