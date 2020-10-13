import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

export default function ItemCard({
  navigation,
  data: { id, name, price, image = "" },
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push("Detail", { item: { id, name, price, image } });
        }}
      >
        <SharedElement id={`item.${id}.photo`}>
          <Image style={styles.photo} resizeMode="contain" source={image} />
        </SharedElement>
      </TouchableOpacity>
      <View style={styles.priceWrapper}>
        <FontAwesome
          size={18}
          name="rupee"
          color="black"
          style={{ paddingTop: 3 }}
        />
        <Text style={styles.price}> {price}</Text>
      </View>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 16,
    // fontSize: 120,
    borderRadius: 12,
    alignSelf: "stretch",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  photo: {
    height: 80,
    marginBottom: 16,
    maxWidth: "100%",
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
  },
  title: {
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "turquoise",
  },
});
