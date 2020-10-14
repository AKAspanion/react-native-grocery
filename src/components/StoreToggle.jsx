import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function StoreToggle({ active, onToggle }) {
  const handleToggle = (name) => {
    if (!onToggle) return;

    onToggle(name);
  };

  const bgColorFruit = active === "FRUIT" ? "#655DB0" : "transparent";
  const bgColorVeggie = active === "VEGGIE" ? "#655DB0" : "transparent";

  const borderFruit = active === "VEGGIE" ? "#cccccc" : "#655DB0";
  const borderVeggie = active === "FRUIT" ? "#cccccc" : "#655DB0";

  const textFruit = active === "VEGGIE" ? "#424242" : "#FFFFFF";
  const textVeggie = active === "FRUIT" ? "#424242" : "#FFFFFF";

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            borderColor: borderFruit,
            backgroundColor: bgColorFruit,
          }}
          onPress={() => handleToggle("FRUIT")}
        >
          <Text style={{ ...styles.text, color: textFruit }}>Fruits</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            borderColor: borderVeggie,
            backgroundColor: bgColorVeggie,
          }}
          onPress={() => handleToggle("VEGGIE")}
        >
          <Text style={{ ...styles.text, color: textVeggie }}>Veggies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: -8,
    paddingTop: 24,
    flexDirection: "row",
  },
  buttonContainer: {
    padding: 8,
    maxWidth: "50%",
    minWidth: "50%",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  button: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
});
