import { View } from "react-native";
import Counter from "./Components/Container/Counter/Counter";

//// on importe la default function avec un nom au choix, sans accolades,
//// on importe les autres fonctions entre accolades.
import Auth from "./Components/Page/Auth/Auth";
import Profil from "./Components/Page/Profil/Profil";

export default function App() {
  const user = null;

  ///// on peut afficher le composant en utilisant les props de l'objet "user" avec {...user}
  return (
    <View>
      {user ? <Profil /> : <Auth />}
      {/* <Counter /> */}
    </View>
  );
}
