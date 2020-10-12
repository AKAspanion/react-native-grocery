import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { Home, OnBoarding } from "../views";
import { setOnBoarded } from "../store/actions/flags";
import { getOnboardFlag } from "../services";

export default function MainContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const setOnBoardedFlag = (flag) => {
    dispatch(setOnBoarded(flag));
  };

  useEffect(() => {
    (async () => {
      const flag = await getOnboardFlag();
      setOnBoardedFlag(flag === "DONE");
    })();
  }, []);

  return (
    <View style={styles.container}>
      {state.flagsState.onBoarded ? <Home /> : <OnBoarding />}
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
