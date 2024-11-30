import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
const HelloWorldApp = () => {
  const [count, setCount] = useState(0);
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 24,
      color: "red",
      textShadowColor: "red",
    },
    otherStyle: {
      position: "absolute",
      justifyContent: "center",
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.textStyle}>React Native Tuts</Text>
      <Button
        onPress={() => setCount((counter) => counter + 1)}
        title="Press Me"
      />
      <Text style={{ color: "white" }}>{count}</Text>
    </View>
  );
};

export default HelloWorldApp;
