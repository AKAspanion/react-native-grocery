import React from "react";
import { useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

export default function ItemCard({ data, onUpdate, navigation }) {
  const { id, name, price, weight, image } = data;

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
          navigation.push("Detail", { item: data });
        }}
      >
        <SharedElement id={`item.${id}.photo`}>
          <Image style={styles.photo} resizeMode="contain" source={image} />
        </SharedElement>
      </TouchableOpacity>
      <View style={styles.content}>
        <View>
          <View style={styles.priceWrapper}>
            <FontAwesome5
              size={18}
              name="rupee-sign"
              color="#424242"
              style={{ paddingTop: 3 }}
            />
            <Text style={styles.price}> {price}</Text>
          </View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.weight}>{weight}</Text>
        </View>
        <View style={styles.actions}>
          <View style={{ padding: 4 }}>
            <Text style={styles.count}>{cartCount()}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.countIcon}
              onPress={() => handleOnPress("PLUS")}
            >
              <FontAwesome5 name="plus" size={12} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.countIcon, marginTop: 4 }}
              onPress={() => handleOnPress("MINUS")}
            >
              <FontAwesome5 name="minus" size={12} color="#FFFFFF" />
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
    borderRadius: 12,
    alignSelf: "stretch",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  content: {
    minWidth: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    padding: 5,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-end",
  },
  count: {
    fontSize: 16,
    minWidth: 16,
    paddingRight: 4,
    color: "#424242",
    fontFamily: "Montserrat-SemiBold",
  },
  photo: {
    height: 80,
    marginBottom: 16,
    maxWidth: "100%",
  },
  priceWrapper: {
    marginTop: -4,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    color: "#424242",
    fontFamily: "Montserrat-SemiBold",
  },
  title: {
    fontSize: 12,
    color: "#424242",
    fontFamily: "Montserrat-SemiBold",
  },
  weight: {
    fontSize: 10,
    color: "#424242",
    fontFamily: "Montserrat-Regular",
  },
  countIcon: {
    backgroundColor: "#655DB0",
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6,
    padding: 4,
  },
});
