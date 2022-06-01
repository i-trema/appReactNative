//import liraries
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

// create a component
const Button = ({
  left,
  label,
  action,
  success,
  danger,
  outline,
  children,
}) => {
  const color = success
    ? STYLES_VARIABLES.SUCCESS_COLOR
    : danger
    ? STYLES.STYLES_VARIABLES.DANGER_COLOR
    : STYLES_VARIABLES.PRIMARY_COLOR;
  const buttonBackgroundColor = outline ? "transparent" : color;

  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.container,
        {
          backgroundColor: buttonBackgroundColor,
          borderColor: outline ? color : "transparent",
          flexDirection: left ? "row" : "row-reverse",
        },
      ]}
    >
      {children}
      <Text
        style={[
          styles.label,
          { color: outline ? color : STYLES_VARIABLES.LIGHT_COLOR },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,

    padding: 7,
    borderRadius: 5,
    textAlign: "center",
    display: "flex",

    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default Button;
