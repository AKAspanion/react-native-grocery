import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

function ItemDetail({
  navigation,
  route: {
    params: { item },
  },
}) {
  const { id, name, price, image, weight } = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5
          style={{ margin: 12 }}
          name="chevron-left"
          color="#424242"
          size={24}
        />
      </TouchableOpacity>
      <SharedElement id={`item.${id}.photo`}>
        <Image style={styles.box} source={image} resizeMode="contain" />
      </SharedElement>
      <View style={{ padding: 8 }}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.priceWrapper}>
          <FontAwesome5
            size={18}
            color="#424242"
            name="rupee-sign"
            style={{ paddingTop: 4, paddingRight: 2 }}
          />
          <Text style={styles.price}>{price}</Text>
        </View>

        <Text style={styles.weight}>{weight}</Text>
        <Text style={styles.about}>About this product</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum
          numquam maiores tempore laudantium dolorum quidem optio iste nesciunt
          id et alias aspernatur deleniti inventore, nemo totam, aliquid eius
          dolor.
        </Text>
      </View>
    </View>
  );
}

ItemDetail.sharedElements = (route) => {
  const { item } = route.params;
  return [`item.${item.id}.photo`];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-start",
  },
  text: {
    padding: 25,
    fontSize: 34,
  },
  about: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    marginTop: 32,
  },
  desc: {
    fontFamily: "Montserrat-Regular",
    marginTop: 8,
    fontSize: 14,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 40,
  },
  priceWrapper: {
    flexDirection: "row",
    paddingLeft: 2,
    paddingTop: 4,
  },
  price: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
  },
  weight: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    paddingTop: 4,
  },
  box: {
    height: 160,
    marginTop: 24,
    marginBottom: 48,
    maxWidth: "100%",
  },
});

export default ItemDetail;
