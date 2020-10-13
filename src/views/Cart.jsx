import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

function Cart({
  route: {
    params: { item },
  },
}) {
  return (
    <View>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image style={styles.box} source={item.image} />
      </SharedElement>
    </View>
  );
}

Cart.sharedElements = (route) => {
  const { item } = route.params;
  return [`item.${item.id}.photo`];
};

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 300,
    borderRadius: 100,
    backgroundColor: "red",
  },
});

export default Cart;
