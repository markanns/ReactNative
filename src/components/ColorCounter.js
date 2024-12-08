import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
}

const styles = StyleSheet.create({});
