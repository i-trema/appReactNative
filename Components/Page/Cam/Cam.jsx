import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import { Feather } from "@expo/vector-icons";

const Cam = ({ route, navigation }) => {
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      let permission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(permission.granted);
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

  return (
    <View style={styles.container}>
      <Camera style={{ width: "100%", height: "100%" }}></Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cam;
