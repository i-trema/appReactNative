import { Text } from "react-native";

//// On exporte la default function SayHello pour l'utiliser en tant que component
export default function SayHello(props) {
    return <Text>{`Hello ${props.prenom} vous avez ${props.age} ans.`}</Text>;
  }

//// On peut exporter une autre fonction, elle sera importée entre accolades 
export function SayHi(){
    return <Text>{`Hi !!!`}</Text>
}