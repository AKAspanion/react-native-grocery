import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Home, OnBoarding } from "../views";

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <Home></Home>
      <OnBoarding></OnBoarding>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 120,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
