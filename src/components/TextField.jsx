import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TextField({
  width,
  onChange,
  value = "",
  placeholder,
}) {
  const callOnChange = (text) => {
    if (onChange) onChange(text);
  };

  return (
    <View style={{ ...styles.searchSection, width: width }}>
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={18} color="#655DB0" />
        <TextInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={callOnChange}
          underlineColorAndroid="transparent"
        />
        {!!value && (
          <TouchableOpacity onPress={() => callOnChange("")}>
            <FontAwesome5 name="times" size={18} color="#655DB0" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    height: 48,
    borderRadius: 12,
  },
  searchContainer: {
    padding: 4,
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    minWidth: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchIcon: {
    padding: 10,
    width: 36,
    height: 36,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 12,
    fontSize: 14,
    paddingTop: 8,
    borderRadius: 12,
    color: "#424242",
    paddingBottom: 10,
    alignSelf: "stretch",
    fontFamily: "Montserrat-Regular",
  },
});
