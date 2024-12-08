import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "friend #3", age: 55 },
    { name: "friend #4", age: 60 },
    { name: "friend #5", age: 65 },
    { name: "friend #6", age: 70 },
    { name: "friend #7", age: 75 },
    { name: "friend #8", age: 80 },
    { name: "friend #9", age: 85 },
  ];

  const showList = () => (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );

  return (
    <View>
      <Text>ListScreen</Text>
      {showList()}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

export default ListScreen;
