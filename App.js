import { useState } from "react";
import { View } from "react-native";
import Counter from "./Components/Container/Counter/Counter";

//// on importe la default function avec un nom au choix, sans accolades,
//// on importe les autres fonctions entre accolades.
import Auth from "./Components/Page/Auth/Auth";
import Profil from "./Components/Page/Profil/Profil";
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
    <UserContext.Provider value={{ user, setUser }}>
      <View>
        {user ? <Profil /> : <Auth />}
        {/* <Counter /> */}
      </View>
    </UserContext.Provider>
  );
}
