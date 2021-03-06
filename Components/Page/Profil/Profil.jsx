import { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import defaultAvatar from "../../../assets/default_avatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Button from "../../UI/Button/Button";
import { Ionicons } from "@expo/vector-icons";

export default function Profil({ route, navigation }) {
  // console.log(props);
  const { user, setUser } = useContext(UserContext);

  const sizes = useWindowDimensions();

  async function pickImage() {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!image.cancelled) {
      setUser({
        ...user,
        avatar: image,
      });
    }
  }

  function goCamera() {
    navigation.push("camera");
  }

  function goEditInfos() {
    console.log("goEdit ok");
    navigation.push("edit_infos");
  }

  return (
    <ScrollView style={{ width: "100%" }}>
      <View>
        <Image
          style={[styles.image, { width: sizes.width, height: sizes.width }]}
          source={user.avatar ? user.avatar : defaultAvatar}
        />

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons
              name="photo-library"
              size={50}
              color={STYLES_VARIABLES.PRIMARY_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goCamera}>
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
        <Button label="Modifiez vos informations" action={goEditInfos}>
          <Ionicons
            name="settings"
            size={24}
            color={STYLES_VARIABLES.LIGHT_COLOR}
          ></Ionicons>
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    width: "100%",
    maxWidth: 300,
    backgroundColor: STYLES_VARIABLES.GREY_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: STYLES_VARIABLES.PRIMARY_COLOR,
    borderTopWidth: 2,
    borderTopColor: STYLES_VARIABLES.PRIMARY_COLOR,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    margin: 20,
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: 150,
  },
  iconsContainer: {
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

  title: {
    color: STYLES_VARIABLES.PRIMARY_COLOR,
    fontWeight: "bold",
  },
  textContainer: {
    borderBottomColor: STYLES_VARIABLES.DARK_GREY_COLOR,
    borderBottomWidth: 1,
    padding: 5,
    margin: 5,
  },
});
