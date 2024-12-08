import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useState } from "react";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);

  const randomRgb = () => {
    return `${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`;
  };

  const handleCreateColor = () => {
    setColors([...colors, randomRgb()]);
  };
  const renderSquare = () => {
    return colors.map((color, index) => {
      return (
        <View
          key={index}
          style={{
            height: "50",
            width: "50",
            backgroundColor: `rgb(${color})`,
          }}
        ></View>
      );
    });
  };
  return (
    <>
      <View>
        <Button title="Add a Color" onPress={handleCreateColor} />
        <Text>ColorScreen</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "5",
        }}
      >
        {renderSquare()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
