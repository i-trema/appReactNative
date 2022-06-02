import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Cam = ({ route, navigation }) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const cameraRef = useRef();

  function toggleCameraType() {
    setCameraType(
      cameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function toggleFlash() {
    setIsFlashOn(!isFlashOn);
  }

  const sizes = useWindowDimensions();

  useEffect(() => {
    (async () => {
      try {
        let permission = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(permission.granted);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (cameraPermission === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={64} color={STYLES_VARIABLES.PRIMARY_COLOR} />
      </View>
    );
  }

  if (cameraPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Permission refusée</Text>
        <Feather
          name="camera-off"
          size={64}
          color={STYLES_VARIABLES.DANGER_COLOR}
        />
      </View>
    );
  }

  async function takePicture() {
    const picture = cameraRef.current.takePictureAsync();
    console.log(picture);
    //1- Utiliser le contexte pour mettre picture dans avatar de user.

    //2- Retourner en arriere (Profil)
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        flashMode={isFlashOn ? "torch" : "off"}
        type={cameraType}
        ratio="16:9"
        style={{ width: sizes.width, height: (sizes.width * 16) / 9 }}
      >
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={toggleCameraType}>
            <MaterialIcons
              name="flip-camera-android"
              size={64}
              color={STYLES_VARIABLES.SECONDARY_COLOR}
            ></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFlash}>
            <MaterialIcons
              name={isFlashOn ? "flash-on" : "flash-off"}
              size={50}
              color={
                isFlashOn
                  ? STYLES_VARIABLES.SUCCESS_COLOR
                  : STYLES_VARIABLES.DANGER_COLOR
              }
            ></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <MaterialIcons
              name="camera"
              size={64}
              color={STYLES_VARIABLES.SUCCESS_COLOR}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "space-around",
    alignSelf: "center",
    position: "absolute",
    bottom: 100,
    borderRadius: 500,
    padding: 10,
  },
});

export default Cam;
