import React, { useRef, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, StyleSheet, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OnBoarding() {
  const [index, setIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const viewBgRange = ["#655DB0", "#655DB0", "#655DB0", "#F2F2F2", "#F2F2F2"];
  const buttonBgRange = ["#F2F2F2", "#F2F2F2", "#F2F2F2", "#655DB0", "#655DB0"];

  const animateSlider = () =>
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    });

  const onPress = () => {
    setIndex((value) => value + 1);
    animateSlider().reset();
    animateSlider().start();
  };

  const isBgColorEven = index === 0 || index % 2 !== 0;
  const isButtonColorEven = index === 0 || index % 2 === 0;

  const inputRange = [0, 0.001, 0.5, 0.501, 1];

  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange: isBgColorEven ? buttonBgRange : viewBgRange,
  });
  const buttonBg = animatedValue.interpolate({
    inputRange,
    outputRange: isBgColorEven ? viewBgRange : buttonBgRange,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.buttonContainer, { backgroundColor: containerBg }]}
      >
        <View style={styles.contentBox}>
          <Text>Help</Text>
        </View>
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: buttonBg,
              transform: [
                {
                  perspective: 400,
                },
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ["0deg", "-90deg", "-180deg"],
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 100, 0],
                  }),
                },
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 10, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity onPress={onPress}>
            <Animated.View
              style={{
                padding: 24,
                overflow: "visible",
                opacity: animatedValue.interpolate({
                  inputRange: [0, 0.1, 0.8, 1],
                  outputRange: [1, 0, 0, 1],
                }),
                transform: [
                  {
                    rotateZ: animatedValue.interpolate({
                      inputRange: [0, 0.5, 0.5001, 1],
                      outputRange: ["0deg", "0deg", "180deg", "180deg"],
                    }),
                  },
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: [0, 0.1, 0.499, 0.5, 0.8, 1],
                      outputRange: [0, 25, 25, -25, -25, 0],
                    }),
                  },
                ],
              }}
            >
              <FontAwesome5
                size={24}
                name="chevron-right"
                color={isButtonColorEven ? "#F2F2F2" : "#655DB0"}
              />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentBox: {
    paddingTop: 100,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 100,
    justifyContent: "space-between",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
