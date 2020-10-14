import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView, StyleSheet, Dimensions, View, Text } from "react-native";

import { getGroceryItem } from "../services";
import {
  addToCart,
  clearFromCart,
  removeFromCart,
} from "../store/actions/grocery";
import { CartCard } from "../components";

function Cart({ navigation }) {
  const dispatch = useDispatch();

  const windowHeight = Dimensions.get("window").height;

  const { cart } = useSelector((state) => state.groceryState);

  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const keys = Object.keys(cart).filter((key) => !!cart[key]);
      const promises = keys.map((id) => getGroceryItem(id));
      const data = (await Promise.all(promises)).map((d) => d.data);

      setItems(data);
    })();
  }, [cart]);

  const handleUpdate = ({ type, item }) => {
    if (type === "PLUS") {
      dispatch(addToCart(item));
    } else if (type === "MINUS") {
      dispatch(removeFromCart(item));
    } else if (type === "DELETE") {
      dispatch(clearFromCart(item));
    }
  };

  return (
    <View style={{ ...styles.container, minHeight: windowHeight }}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={{ margin: 12 }}
            name="chevron-left"
            color="#424242"
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Cart</Text>
        <View style={{ width: 45 }}></View>
      </View>
      <ScrollView>
        {items.length ? (
          <View style={{ marginTop: 8, paddingBottom: 96 }}>
            {items.map((item) => (
              <CartCard
                data={item}
                cart={cart}
                key={item.id}
                navigation={navigation}
                onUpdate={handleUpdate}
              ></CartCard>
            ))}
          </View>
        ) : (
          <Text>Empty</Text>
        )}
      </ScrollView>
    </View>
  );
}

Cart.sharedElements = (route) => {
  const {
    item: { cart },
  } = route.params;
  return [
    ...Object.keys(cart)
      .filter((key) => !!cart[key])
      .map((c) => `item.${c}.photo`),
  ];
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#EEEEEE",
  },
  topBar: {
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default Cart;
