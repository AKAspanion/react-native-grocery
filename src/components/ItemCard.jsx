import React from "react";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

export default function ItemCard({ data, onUpdate, navigation }) {
  const { id, name, price, image = "" } = data;

  const { cart } = useSelector((state) => state.groceryState);

  const cartCount = () => {
    return cart[id] || "0";
  };

  const handleOnPress = (type) => {
    if (!onUpdate) return;

    onUpdate({ type, item: data });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ padding: 12 }}
        onPress={() => {
          navigation.push("Detail", { item: { id, name, price, image } });
        }}
      >
        <SharedElement id={`item.${id}.photo`}>
          <Image style={styles.photo} resizeMode="contain" source={image} />
        </SharedElement>
      </TouchableOpacity>
      <View
        style={{
          minWidth: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
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
        <View
          style={{
            padding: 4,
            borderRadius: 4,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#EEEEEE",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ padding: 4 }}>
            <Text
              style={{
                fontSize: 16,
                minWidth: 16,
                paddingRight: 4,
                fontFamily: "Montserrat-SemiBold",
              }}
            >
              {cartCount()}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.countIcon}
              onPress={() => handleOnPress("PLUS")}
            >
              <FontAwesome name="plus" size={12} color="#424242" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.countIcon, marginTop: 3 }}
              onPress={() => handleOnPress("MINUS")}
            >
              <FontAwesome name="minus" size={12} color="#424242" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  countIcon: {
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
    padding: 3,
  },
});
