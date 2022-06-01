//// raccourci "rnfc" avec "react native snippet" : React Native Functional Component

//import liraries
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import Button from "../../UI/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../../UI/InputWithError/InputWithError";

// create a component
const Login = () => {
  //// 1 - créer les variables d'état :
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //// 2 - créer les fonctions qui changent les variables :
  function handleEmail(text) {
    setEmailInput(text);
  }

  function handlePassword(text) {
    setPasswordInput(text);
  }

  //// 3 - créer la fonction pr valider le formulaire :
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Connexion réussie ! Email : " + emailInput);
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide !" : "");
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court !" : ""
      );
    }
  }

  //// 4 - mettre les composants en place et les lier avec les variables et les fonctions :
  return (
    <View style={styles.container}>
      <InputWithError
        holder="Email"
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type="email-address"
      />

      <InputWithError
        holder="Mot de passe"
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type="default"
        isPassword
      />

      <Button label="Connexion" action={login}>
        <AntDesign
          name="login"
          size={20}
          color={STYLES_VARIABLES.LIGHT_COLOR}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Login;
