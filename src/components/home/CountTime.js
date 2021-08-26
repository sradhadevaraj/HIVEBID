// Home // CountTime

import React from "react";
import CountDown from "react-native-countdown-component";
import COLORS from "../../constants/Colors";

function CountTime(props) {
  return (
    <CountDown
      style={{ marginTop: 10 }}
      size={8}
      until={30000}
      onFinish={() => alert("Finished")}
      digitStyle={{
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: COLORS.GREEN,
      }}
      digitTxtStyle={{ color: COLORS.GREEN }}
      timeLabelStyle={{ color: "red", fontWeight: "bold" }}
      separatorStyle={{ color: COLORS.GREEN }}
      timeToShow={["H", "M", "S"]}
      timeLabels={{ m: null, s: null }}
      showSeparator
    />
  );
}

export default CountTime;
