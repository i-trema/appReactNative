import { StyleSheet, Text, View } from "react-native";

export default function Card(props){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.content}>{props.content}</Text>
            <View>{props.children}</View>
        </View>

    )
}


const styles = StyleSheet.create({
    
    title: {
      padding: 20,
      backgroundColor: "#282d51",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 28,
      color: "white"
    },
    content: {
        padding: 15,
        backgroundColor: "#282d51",
      textAlign: "center",
      color: "white",
      fontSize: 20,
    },


    }
  );