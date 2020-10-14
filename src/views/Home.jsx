import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useSearch } from "../hooks/";
import { TextField, ItemCard, StoreToggle, EmptyState } from "../components";
import { addToCart, removeFromCart } from "../store/actions/grocery";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.groceryState);

  const [active, setActive] = useState("FRUIT");

  const [searchText, changeSearchText] = useState("");
  const { data: fruits, loading } = useSearch(
    "getGroceryItems",
    searchText,
    active
  );

  const totalCartCount = Object.keys(cart).reduce((a, b) => a + cart[b], 0);

  const handleCart = ({ type, item }) => {
    if (type === "PLUS") {
      dispatch(addToCart(item));
    } else if (type === "MINUS") {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <FontAwesome5 name="user-circle" size={24} color="#655DB0" />
        <Text style={styles.heading}>Grocery</Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push("Cart", { item: { cart } })}
          >
            <FontAwesome5 name="shopping-basket" size={24} color="#655DB0" />
          </TouchableOpacity>
          {totalCartCount ? (
            <View style={styles.badge}>
              <Text style={styles.cartCount}>{totalCartCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <TextField
        value={searchText}
        placeholder="Search"
        onChange={changeSearchText}
      />
      <StoreToggle active={active} onToggle={(type) => setActive(type)} />
      {loading ? (
        <EmptyState>
          <ActivityIndicator size="large" color="#424242" />
        </EmptyState>
      ) : !fruits.length ? (
        <EmptyState />
      ) : (
        <ScrollView style={{ marginTop: 24 }}>
          <View
            style={{
              margin: -8,
              flexWrap: "wrap",
              paddingBottom: 172,
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
                <ItemCard
                  data={fruit}
                  navigation={navigation}
                  onUpdate={(e) => handleCart(e)}
                />
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
    backgroundColor: "#F2F2F2",
  },
  topBar: {
    paddingTop: 8,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 24,
    minWidth: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartCount: {
    fontSize: 10,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
  badge: {
    top: -10,
    left: -10,
    width: 18,
    height: 18,
    color: "red",
    borderRadius: 20,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "red",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
});
