import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { Home, ItemDetail } from "../views";
import { setOnBoarded } from "../store/actions/flags";
import { getOnboardFlag } from "../services";

const Stack = createSharedElementStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="List" component={Home} />
        <Stack.Screen
          name="Detail"
          component={ItemDetail}
          sharedElementsConfig={(route) => {
            const { item } = route.params;
            return [`item.${item.id}.photo`];
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 500 } },
              close: { animation: "timing", config: { duration: 500 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
