import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const noResult = require("../../assets/images/NoSearchResult.png");
const emptyCart = require("../../assets/images/NoItemsCart.png");

export default function EmptyState({
  children,
  type = "search",
  message = "No data found",
  description = "To widen your search, change or remove filters",
}) {
  const images = {
    search: noResult,
    cart: emptyCart,
  };
  return (
    <View style={styles.empty}>
      {children || [
        <Image
          key={1}
          style={styles.image}
          resizeMode="contain"
          source={images[type] || noResult}
        />,
        <Text key={2} style={styles.message}>
          {message}
        </Text>,
        <Text key={3} style={styles.desc}>
          {description}
        </Text>,
      ]}
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    minHeight: 500,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  image: {
    height: 260,
  },
  message: {
    fontSize: 20,
    color: "#424242",
    fontFamily: "Montserrat-SemiBold",
  },
  desc: {
    paddingTop: 6,
    color: "#424242",
    maxWidth: "60%",
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
  },
});
