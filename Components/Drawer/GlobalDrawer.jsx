import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "../Container/Navbar/Navbar";
import ProfilStack from "../Stack/ProfilStack/ProfilStack";
import GOT from "../Page/GOT/GOT";

const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ header: (props) => <Navbar {...props} /> }}
    >
      <Drawer.Screen
        name="got"
        component={GOT}
        options={{ title: "Personnages de GOT" }}
      />
      <Drawer.Screen
        name="profilstack"
        component={ProfilStack}
        options={{ title: "Profil" }}
      />
    </Drawer.Navigator>
  );
}
