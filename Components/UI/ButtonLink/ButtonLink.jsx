//import liraries
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const ButtonLink = (props) => {
  return (
    <TouchableOpacity onPress={props.action} style={styles.container}>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  link: {
    color: "royalblue",
    textDecorationLine: "underline",
    marginVertical: 10,
  },
});

//make this component available to the app
export default ButtonLink;
