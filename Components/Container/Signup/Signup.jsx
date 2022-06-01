import { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputWithError from "../../UI/InputWithError/InputWithError";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../UI/Button/Button";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

const Signup = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  function handleEmail(text) {
    setEmailInput(text);
  }

  function handleUsername(text) {
    setUsernameInput(text);
  }

  function handlePassword(text) {
    setPasswordInput(text);
  }

  function handleConfirmPassword(text) {
    setConfirmPasswordInput(text);
  }

  function signup() {
    if (
      emailInput.includes("@") &&
      usernameInput.length <= 12 &&
      usernameInput.length >= 3 &&
      passwordInput.length >= 6 &&
      confirmPasswordInput == passwordInput
    ) {
      alert("Inscription réussie " + usernameInput + " !");
    } else {
      setEmailError(emailInput.includes("@") ? "" : "Email invalide !");
      if (usernameInput.length < 3) {
        setUsernameError("Username trop court ! Min. 3 caractères");
      } else if (usernameInput.length > 12) {
        setUsernameError("Username trop long ! Max. 12 caractères");
      } else {
        setUsernameError("");
      }
      setPasswordError(
        passwordInput.length >= 6
          ? ""
          : "Mot de passe trop court ! Min. 6 caractères"
      );
      setConfirmPasswordError(
        confirmPasswordInput == passwordInput
          ? ""
          : "Les mots de passe ne sont pas identiques !"
      );
    }
  }

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
        holder="Username"
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type="default"
      />
      <InputWithError
        holder="Mot de passe"
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type="default"
        isPassword
      />

      <InputWithError
        holder="Confirmez..."
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        errorMessage={confirmPasswordError}
        type="default"
        isPassword
      />
      <Button label="Inscription" action={signup}>
        <AntDesign
          name="checkcircleo"
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

export default Signup;
