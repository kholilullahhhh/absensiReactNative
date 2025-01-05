import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function History() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 40 }}>
      <StatusBar style="auto" />
      <Text>History Screen</Text>
    </View>
  );
}
