//import liraries
import React, { Component, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../../../contexts/UserContext";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

// create a component
const Navbar = ({ navigation, options }) => {
  const { user, setUser } = useContext(UserContext);
  function openMenu() {
    navigation.openDrawer();
  }

  function logout() {
    setUser(null);
  }
  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS !== "web" ? 25 : 10 },
      ]}
    >
      <TouchableOpacity onPress={openMenu}>
        <AntDesign
          name="menu-fold"
          size={24}
          color={STYLES_VARIABLES.LIGHT_COLOR}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{options.title}</Text>
      <TouchableOpacity onPress={logout}>
        <AntDesign
          name="logout"
          size={24}
          color={STYLES_VARIABLES.LIGHT_COLOR}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: STYLES_VARIABLES.PRIMARY_COLOR,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    color: STYLES_VARIABLES.LIGHT_COLOR,
    fontSize: 24,
  },
});

//make this component available to the app
export default Navbar;
