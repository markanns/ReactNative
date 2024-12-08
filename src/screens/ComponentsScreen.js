import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ComponentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
