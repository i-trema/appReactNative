import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//// on importe la default function avec un nom au choix, sans accolades,
//// on importe les autres fonctions entre accolades.
import SayHello, { SayHi } from "./Components/Container/SayHello/SayHello";

export default function App() {
  const user = {
    prenom: "ianis",
    nom: "mau",
    age: 36,
  };

  ///// on peut afficher le composant SayHello en utilisant les props de l'objet "user" avec {...user}
  return (
    <View style={styles.container}>
      <Text style={{ color: "royalblue" }}>
        Open up App.js to start working on your app!
      </Text>
      <SayHello {...user} />
      <SayHi />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  classeText: {
    fontSize: 30,
    color: "red",
  },
});
