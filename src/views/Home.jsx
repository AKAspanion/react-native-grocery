import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push("Detail", { item: { id: 1, name: "ABC" } });
        }}
      >
        <SharedElement id={`item.${1}.photo`}>
          <Image
            style={styles.box}
            source={{
              uri:
                "https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg",
            }}
          />
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 120,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "turquoise",
  },
});
