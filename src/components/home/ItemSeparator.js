// Home // ItemSeparator

import React from "react";
import { View } from "react-native";

function ItemSeparator({ height, width }) {
  return <View style={{ width, height }} />;
}

ItemSeparator.defaultprops = {
  height: 0,
  width: 0,
};

export default ItemSeparator;
