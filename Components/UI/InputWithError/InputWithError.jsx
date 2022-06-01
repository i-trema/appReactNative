import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const InputWithError = ({
  holder,
  valeur,
  action,
  errorMessage,
  type,
  isPassword,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  //   console.log(Platform);

  function toggleIsPasswordHidden() {
    setIsPasswordHidden(!isPasswordHidden);
  }
  //// on teste Platform.OS pour voir si on est sur le web ou sur un mobile,
  //// la clé "outlineStyle" ne fonctionnera pas sur mobile.
  const outline = Platform.OS === "web" ? { outlineStyle: "none" } : null;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderBottomColor:
              errorMessage === ""
                ? STYLES_VARIABLES.PRIMARY_COLOR
                : STYLES_VARIABLES.DANGER_COLOR,
          },
        ]}
      >
        <TextInput
          style={[
            {
              color:
                errorMessage === ""
                  ? STYLES_VARIABLES.PRIMARY_COLOR
                  : STYLES_VARIABLES.DANGER_COLOR,
            },
            outline,
          ]}
          placeholder={holder}
          onChangeText={action}
          value={valeur}
          secureTextEntry={isPassword && isPasswordHidden}
          keyboardType={type}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.icon}
            onPress={toggleIsPasswordHidden}
          >
            <Entypo
              name={isPasswordHidden ? "eye" : "eye-with-line"}
              size={24}
              color={
                isPasswordHidden
                  ? STYLES_VARIABLES.PRIMARY_COLOR
                  : STYLES_VARIABLES.DANGER_COLOR
              }
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: STYLES_VARIABLES.LIGHT_COLOR,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    borderBottomWidth: 2,
  },
  icon: {
    position: "absolute",
    right: 7,
  },
  error: {
    color: STYLES_VARIABLES.DANGER_COLOR,
    fontSize: 13,
  },
});

export default InputWithError;
