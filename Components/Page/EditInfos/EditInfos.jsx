//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import Card from "../../HOC/Card/Card";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";

// create a component
const EditInfos = () => {
  const { user, setUser } = useContext(UserContext);

  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");

  function handleEmail(text) {
    setEmailInput(text);
  }

  function handleUsername(text) {
    setUsernameInput(text);
  }

  function handleDescription(text) {
    setDescriptionInput(text);
  }

  async function saveInfos() {
    if (
      emailInput.includes("@") &&
      usernameInput.length <= 12 &&
      usernameInput.length >= 3
    ) {
      setUser({
        email: emailInput,
        username: usernameInput,
        description: descriptionInput,
      });
      console.log(user.email);
      if (navigation.canGoBack()) {
        navigation.pop();
      }
    } else {
      setEmailError(emailInput.includes("@") ? "" : "Email invalide !");
      if (usernameInput.length < 3) {
        setUsernameError("Username trop court ! Min. 3 caractères");
      } else if (usernameInput.length > 12) {
        setUsernameError("Username trop long ! Max. 12 caractères");
      } else {
        setUsernameError("");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Card title="Modifiez" content="vos informations">
        <InputWithError
          holder={user.email}
          valeur={emailInput}
          action={handleEmail}
          errorMessage={emailError}
          type="email-address"
        ></InputWithError>
        <InputWithError
          holder="Username"
          valeur={usernameInput}
          action={handleUsername}
          errorMessage={usernameError}
          type="default"
        ></InputWithError>
        <InputWithError
          holder={user.description ? null : "Entrez une description..."}
          valeur={descriptionInput}
          action={handleDescription}
        ></InputWithError>
        <Button label="Enregistrer" action={saveInfos}></Button>
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default EditInfos;
