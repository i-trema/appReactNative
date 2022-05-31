import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(0);

  console.log("Quand le composant et mis dans le DOM: counter = ", counter);

  function add() {
    const newCounter = counter + 1;
    console.log("Dans add, avant changement: counter = ", counter);
    setCounter(newCounter);
    console.log("Dans add, apres changement: counter = ", counter);
    setDoubleCounter(newCounter * 2);
  }
  function sub() {
    console.log("Click sub");
    console.log("counter ", counter);
    setCounter(counter - 1);
  }
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Text>Double Counter: {doubleCounter}</Text>
      <Button onPress={sub} title="-1" color="red" />
      <Button onPress={add} title="+1" />
    </View>
  );
}

///////////////////////////////////////////////////////////
//// fonction clone de useState ( pour comprendre ):
function myState(intialValue) {
  let value = intialValue;

  function setValue(newValue) {
    value = newValue;
  }

  return [value, setValue];
}
const [counter2, setCounter2] = myState(0);
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
