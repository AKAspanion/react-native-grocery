import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { getOnboardFlag } from "../services";
import { Home, Cart, ItemDetail } from "../views";
import { setOnBoarded } from "../store/actions/flags";

const Stack = createSharedElementStackNavigator();

export default function MainContainer() {
  const dispatch = useDispatch();

  const setOnBoardedFlag = (flag) => {
    dispatch(setOnBoarded(flag));
  };

  useEffect(() => {
    (async () => {
      const flag = await getOnboardFlag();
      setOnBoardedFlag(flag === "DONE");
    })();
  }, []);

  const stackOptions = () => ({
    gestureEnabled: false,
    transitionSpec: {
      open: { animation: "timing", config: { duration: 500 } },
      close: { animation: "timing", config: { duration: 500 } },
    },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress,
      },
    }),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
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
