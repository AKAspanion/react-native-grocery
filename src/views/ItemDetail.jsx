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
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <FontAwesome5
          style={{ margin: 12 }}
          name="chevron-left"
          color="black"
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.push("Cart", { item });
        }}
      >
        <SharedElement id={`item.${item.id}.photo`}>
          <Image style={styles.box} source={item.image} resizeMode="contain" />
        </SharedElement>
      </TouchableOpacity>
      <View style={{ padding: 8 }}>
        <Text style={styles.title}>{item.name}</Text>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 16,
  },
  text: {
    padding: 25,
    fontSize: 34,
  },
  about: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    marginTop: 24,
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
  box: {
    height: 160,
    marginTop: 24,
    marginBottom: 48,
    maxWidth: "100%",
    borderRadius: 100,
  },
});

export default ItemDetail;
