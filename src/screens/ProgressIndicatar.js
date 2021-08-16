import React, { useState } from "react";
import { View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

function ProgressIndicatar(props) {
  const [value, setValue] = useState(0);
  return (
    <View style={{}}>
      <CircularProgress
        radius={20}
        value={100}
        textColor="#222"
        fontSize={10}
        valueSuffix={"%"}
        inActiveStrokeColor={"#2ecc71"}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={3}
        activeStrokeWidth={3}
        duration={50000}
        onAnimationComplete={() => setValue(50)}
      />
    </View>
  );
}

export default ProgressIndicatar;
