//import liraries
import { View, Text, StyleSheet } from "react-native";

// create a component
const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Signup;
