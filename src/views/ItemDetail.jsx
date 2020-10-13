import React from "react";
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
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.text}>{`<`}</Text>
      </TouchableOpacity>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          style={styles.box}
          source={{
            uri:
              "https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg",
          }}
        />
      </SharedElement>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 25,
    fontSize: 34,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "turquoise",
  },
});

export default ItemDetail;
