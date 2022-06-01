import { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import defaultAvatar from "../../../assets/default_avatar.png";
export default function Profil() {
  const { user, setUser } = useContext(UserContext);

  const sizes = useWindowDimensions();
  console.log(sizes);

  return (
    <View>
      <View>
        <Image style={styles.image} source={defaultAvatar} />
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Email: </Text>
          <Text>{user.email}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Username:</Text>
          <Text>{user.username}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Description: </Text>

          <Text>
            {user.description
              ? user.description
              : "Veuillez entrer une description..."}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    margin: 20,
  },
  container: {
    marginHorizontal: 30,
    marginVertical: 40,
    padding: 30,

    backgroundColor: STYLES_VARIABLES.GREY_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: STYLES_VARIABLES.PRIMARY_COLOR,
    borderTopWidth: 2,
    borderTopColor: STYLES_VARIABLES.PRIMARY_COLOR,
  },
  title: {
    color: STYLES_VARIABLES.PRIMARY_COLOR,
    fontWeight: "bold",
  },
  textContainer: {
    borderBottomColor: STYLES_VARIABLES.DARK_GREY_COLOR,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
