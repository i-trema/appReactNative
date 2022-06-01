import { StyleSheet, Text, View } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

//// composant Card, avec ses "props", qui retourne du JSX.
export default function Card(props) {
  console.log(props);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
        <View style={styles.childrenContainer}>{props.children}</View>
      </View>
    </View>
  );
}

//// pour créer des classes CSS,
//// on utilise l'objet StyleSheet (de ReactNative) qui a une fonction .create().
//// les instructions sont en camelCase et pas avec des "-".
const styles = StyleSheet.create({
  cardContainer: {
    margin: 30,
  },
  container: {
    backgroundColor: STYLES_VARIABLES.PRIMARY_COLOR,
    borderRadius: 5,
    textAlign: "center",
  },
  title: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 30,
    color: STYLES_VARIABLES.LIGHT_COLOR,
  },
  content: {
    padding: 15,
    color: STYLES_VARIABLES.LIGHT_COLOR,
    fontSize: 20,
  },
  childrenContainer: {
    backgroundColor: STYLES_VARIABLES.GREY_COLOR,
    padding: 15,
  },
});
