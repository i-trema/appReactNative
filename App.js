import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

//// on importe la default function avec un nom au choix, sans accolades,
//// on importe les autres fonctions entre accolades.
import Auth from "./Components/Page/Auth/Auth";
import ProfilStack from "./Components/Stack/ProfilStack/ProfilStack";
import { UserContext } from "./contexts/UserContext";

export default function App() {
  const fakeUser = {
    email: "test@email.com",
    username: "Jo Jo",
    // description: "description test",
  };
  const [user, setUser] = useState(fakeUser);

  ///// on peut afficher le composant en utilisant les props de l'objet "user" avec {...user}
  return (
    //// on englobe la vue avec le contexte "UserContext" qui sera disponible dans toute l'appli :
    //// on englobe l'élément ProfilStack avec NavigationContainer pour prendre en compte les "stacks"
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        <NavigationContainer>
          {user ? <ProfilStack /> : <Auth />}
        </NavigationContainer>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
