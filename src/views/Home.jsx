import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import { TextField } from "../components";
import ItemCard from "../components/ItemCard";

const fruits = [
  {
    id: 1,
    name: "Banana",
    image: require("../../assets/images/banana.png"),
    price: 100,
    color: "yellow",
  },
  {
    id: 2,
    name: "Apple",
    image: require("../../assets/images/apple.png"),
    price: 100,
    color: "red",
  },
  {
    id: 3,
    name: "Avocado",
    image: require("../../assets/images/avocado.png"),
    price: 100,
    color: "red",
  },
  {
    id: 4,
    name: "Pomegranate",
    image: require("../../assets/images/pomegranate.png"),
    price: 100,
    color: "marron",
  },
];

export default function Home({ navigation }) {
  const [searchText, changeSearchText] = useState("");
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          paddingTop: 8,
          color: "#424242",
          paddingBottom: 24,
          textAlign: "center",
          fontFamily: "Montserrat-SemiBold",
        }}
      >
        Grocery
      </Text>
      <TextField
        value={searchText}
        placeholder="Search"
        onChange={changeSearchText}
      />
      <ScrollView style={{ marginTop: 24 }}>
        <View
          style={{
            margin: -8,
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {fruits.map((fruit) => (
            <View
              key={fruit.id}
              style={{
                maxWidth: "50%",
                minWidth: "50%",
                alignSelf: "stretch",
              }}
            >
              <ItemCard navigation={navigation} data={fruit} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

Home.sharedElements = () => {
  return [...fruits.map((fruit) => `item.${fruit.id}.photo`)];
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // flex: 1,
    // fontSize: 120,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "turquoise",
  },
});
