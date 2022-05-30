import { Text } from "react-native";
import { StyleSheet } from "react-native";

//// On exporte la default function SayHello pour l'utiliser en tant que component,
//// on peut mettre un style "conditionnel" avec un opérateur ternaire dans la balise Text.
export default function SayHello(props) {
    console.log(props);
    return <Text
    style={[{ color: props.isFormat ? "red" : "green"}, styles.text]}>{`Hello ${props.prenom} vous avez ${props.age} ans.`}</Text>;
  }

//// On peut exporter une autre fonction, elle sera importée entre accolades.
export function SayHi(){
    return <Text>{`Hi !!!`}</Text>
}

//// ici on crée le style utilisé dans la balise <Text /> du composant SayHello.
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "bold",
    },
});