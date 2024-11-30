import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const HelloWorldApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>React Native Tuts</Text>
      <Button
        onPress={() => setCount((counter) => counter + 1)}
        title="Press Me"
      />
      <Text style={{ color: "white" }}>{count}</Text>
    </View>
  );
};
export default HelloWorldApp;
