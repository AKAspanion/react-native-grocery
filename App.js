import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";

import configureStore from "./src/store";
import { MainContainer } from "./src/containers";
import { StatusBar, Text } from "react-native";

const store = configureStore();

const customFonts = {
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync(customFonts);
      setLoaded(true);
    })();
  }, []);

  return loaded ? (
    <Provider store={store}>
      <StatusBar style="auto" />
      <MainContainer></MainContainer>
    </Provider>
  ) : (
    <Text>Loading</Text>
  );
}
