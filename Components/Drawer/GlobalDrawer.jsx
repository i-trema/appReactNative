import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../Stack/ProfilStack/ProfilStack";

const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="profilstack" component={ProfilStack} />
    </Drawer.Navigator>
  );
}
