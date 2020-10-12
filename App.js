import React from "react";
import { Provider } from "react-redux";

import configureStore from "./src/store";
import { MainContainer } from "./src/components";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer></MainContainer>
    </Provider>
  );
}
