import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to Image screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color screen"
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button
        title="Go to Square screen"
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Button
        title="Go to Text screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <TouchableOpacity onPress={() => console.log("List Pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
