import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { getOnboardFlag } from "../services";
import { Home, Cart, ItemDetail, OnBoarding } from "../views";
import { setOnBoarded } from "../store/actions/flags";

const Stack = createSharedElementStackNavigator();

export default function MainContainer() {
  const dispatch = useDispatch();

  const { onBoarded } = useSelector((state) => state.flagsState);

  useEffect(() => {
    (async () => {
      const flag = await getOnboardFlag();
      dispatch(setOnBoarded(flag === "DONE"));
    })();
  }, []);

  const stackOptions = () => ({
    gestureEnabled: false,
    transitionSpec: {
      open: { animation: "timing", config: { duration: 400 } },
      close: { animation: "timing", config: { duration: 400 } },
    },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress,
      },
    }),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={onBoarded ? "Home" : "OnBoarding"}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={ItemDetail}
          options={stackOptions}
        />
        <Stack.Screen name="Cart" component={Cart} options={stackOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
