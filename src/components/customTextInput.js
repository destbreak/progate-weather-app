import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CustomTextInput = ({ text, onChange, placeholder, multiline = false, numberOfLines }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default CustomTextInput;
