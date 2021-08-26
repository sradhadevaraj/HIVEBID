//ErrorMessage

import React from "react";
import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/Colors";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: COLORS.RED,
    marginLeft: 18,
    marginTop: 3,
  },
});

export default ErrorMessage;
