import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, StyleSheet, Text, View } from "react-native";

import { increment, decrement } from "../store/actions/counter";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countState);

  const incrementCounter = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementCounter = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <View>
      <Text style={{ padding: 24 }}>
        Learning to add redux inside react-native, {state.count}
      </Text>
      <View style={{ padding: 24 }}>
        <Button title="increment" onPress={() => incrementCounter()}></Button>
      </View>
      <Button title="decrement" onPress={() => decrementCounter()}></Button>
    </View>
  );
}
