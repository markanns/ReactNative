import { StyleSheet, Text, View } from "react-native";
import { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  //state === { red: number, green: number, blue: number };
  // action === {colorToChange: "reed" || "green" || "blue", amount: 15 || -15}

  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };

    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ colorToChange: "red", amount: 10 })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -10 })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: "green", amount: 10 })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -10 })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: "blue", amount: 10 })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -10 })}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
