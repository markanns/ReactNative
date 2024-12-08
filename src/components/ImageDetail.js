import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function ImageDetail({ title, imageSource }) {
  return (
    <ScrollView>
      <Image style={styles.imageStyle} source={imageSource} />
      <Text>{title}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 250,
    objectFit: "cover",
  },
});
