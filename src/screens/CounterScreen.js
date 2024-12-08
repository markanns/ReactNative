import { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const reducer = (state, action) => {
  //state === { count: number }
  // action === { type: "increment" || "decrement", payload: 1 }
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text>CounterScreen</Text>
      <Button
        title="Press"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

export default CounterScreen;
