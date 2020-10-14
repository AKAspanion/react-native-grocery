import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import { TextField, ItemCard } from "../components";
import { useSearch } from "../hooks/";

export default function Home({ navigation }) {
  const [searchText, changeSearchText] = useState("");
  const { data: fruits, loading } = useSearch("getFruits", searchText);

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
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <ScrollView style={{ marginTop: 24 }}>
          <View
            style={{
              margin: -8,
              flexWrap: "wrap",
              paddingBottom: 120,
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
