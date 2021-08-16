import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import COLORS from "../../constants/Colors";

export default App = () => {
  const [time, setTime] = useState({ mins: 0, secs: 25 });

  useEffect(() => {
    if (time.mins < 0) {
      if (timerId) {
        clearInterval(timerId);
      }
      return;
    }
    const timerId = setInterval(() => {
      if (time.secs <= 0) {
        if (time.mins <= 0) {
          setTime({ ...time, mins: time.mins - 1, secs: time.secs });
          alert("Rakesh placed the current bid");
        } else {
          setTime({ ...time, mins: time.mins - 1, secs: 59 });
        }
      } else setTime({ ...time, mins: time.mins, secs: time.secs - 1 });
    }, 1000);
    return () => clearInterval(timerId);
  }, [time]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, color: COLORS.WHITE }}>
        {time.mins >= 0 ? time.mins : 0}:{time.secs < 10 && 0}
        {time.secs}
      </Text>
    </View>
  );
};
