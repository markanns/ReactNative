import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

const TextScreen = () => {
  const [text, setText] = useState("");

  const validateText = (text) => {
    if (text.length === 0) return;
    if (text.length < 5) {
      return true;
    }
  };
  return (
    <View>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        style={styles.input}
        value={text}
        onChangeText={(newValue) => setText(newValue)}
      />
      {validateText(text) ? <Text>Text is too short</Text> : null}
    </View>
  );
};

export default TextScreen;
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
