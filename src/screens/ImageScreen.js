import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
  const images = [
    { title: "Forest", imageSource: require("../../assets/forest.jpg") },
    { title: "Beach", imageSource: require("../../assets/beach.jpg") },
    { title: "Mountain", imageSource: require("../../assets/mountain.jpg") },
  ];

  const slike = (
    <FlatList
      data={images}
      keyExtractor={(image) => image.title}
      renderItem={({ item }) => {
        return (
          <ImageDetail title={item.title} imageSource={item.imageSource} />
        );
      }}
    />
  );

  return (
    <View>
      <Text>ImageScreen</Text>
      {slike}
    </View>
  );
}

const styles = StyleSheet.create({});
