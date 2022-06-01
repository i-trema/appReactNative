import { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import defaultAvatar from "../../../assets/default_avatar.png";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profil() {
  const { user, setUser } = useContext(UserContext);

  const sizes = useWindowDimensions();
  console.log(sizes);

  return (
    <View style={{ width: "100%" }}>
      <View>
        <Image
          style={[styles.image, { width: sizes.width, height: sizes.width }]}
          source={defaultAvatar}
        />

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <MaterialIcons
              name="photo-library"
              size={50}
              color={STYLES_VARIABLES.PRIMARY_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="photo-camera"
              size={50}
              color={STYLES_VARIABLES.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
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
    maxWidth: 300,
    maxHeight: 300,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: STYLES_VARIABLES.GREY_COLOR,
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-around",
    padding: 5,
    margin: 10,
    borderRadius: 10,
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
