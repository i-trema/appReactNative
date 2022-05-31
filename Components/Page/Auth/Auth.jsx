import { Text, View } from "react-native";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  const bienvenue = {
    title: "Bienvenue !",
    content: "Veuillez vous authentifier",
    // children: (
    //   <Text style={{ backgroundColor: "white" }}>composant potentiel</Text>
    // ),
  };
  return (
    <View>
      <Card {...bienvenue}>
        <Text>Composant potentiel</Text>
      </Card>
    </View>
  );
}
