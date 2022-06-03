//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import Card from "../../HOC/Card/Card";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";

// create a component
const EditInfos = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  //   console.log(user["name"]);

  const [inputs, setInputs] = useState({
    email: {
      holder: "Email",
      value: user.email,
      error: "",
      test: function () {
        return this.value.includes("@");
      },
      handleError: function () {
        return !this.test() ? "Email invalide !" : "";
      },
    },
    username: {
      holder: "Username",
      value: user.username,
      error: "",
      test: function () {
        return this.value.length >= 3 && this.value.length <= 12;
      },
      handleError: function () {
        return !this.test() ? "Min 3 et Max 12 !" : "";
      },
    },
    description: {
      holder: "Description",
      value: user.description ? user.description : "",
      error: "",
      test: function () {
        return true;
      },
      handleError: function () {
        return !this.test() ? "Une erreur dans la description!" : "";
      },
    },
  });

  function handleInputs(name, text) {
    setInputs({
      ...inputs,
      [name]: {
        ...inputs[name],
        value: text,
        error: "",
      },
    });
  }

  function goBackProfil() {
    if (navigation.canGoBack()) {
      navigation.pop();
    }
  }

  function saveInfos() {
    const { email, username, description } = inputs;
    if (email.test() && username.test() && description.test()) {
      setUser({
        ...user,
        email: email.value,
        username: username.value,
        description: description.value,
      });
      goBackProfil();
    } else {
      setInputs({
        email: {
          ...email,
          error: email.handleError(),
          //   error: !email.test() ? "Email invalide !" : "",
        },
        username: {
          ...username,
          error: username.handleError(),
          //   error: !username.test() ? "Minimum 3 et Maximum 12 !" : "",
        },
        description: {
          ...description,
          error: description.handleError(),
          //   error: !description.test() ? "Erreur dans la description !" : "",
        },
      });
    }
  }

  return (
    <View style={styles.container}>
      <Card title="Modifiez" content="vos informations">
        <InputWithError
          holder={inputs.email.holder}
          valeur={inputs.email.value}
          action={(value) => {
            handleInputs("email", value);
          }}
          errorMessage={inputs.email.error}
          type="email-address"
        />
        <InputWithError
          holder={inputs.username.holder}
          valeur={inputs.username.value}
          action={(value) => {
            handleInputs("username", value);
          }}
          errorMessage={inputs.username.error}
          type="default"
        />
        <InputWithError
          holder={inputs.description.holder}
          valeur={inputs.description.value}
          action={(value) => {
            handleInputs("description", value);
          }}
          errorMessage={inputs.description.error}
          type="default"
        />
        <View
          style={{
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button label="Annuler" action={goBackProfil} outline></Button>
          <Button label="Enregistrer" action={saveInfos} success></Button>
        </View>
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
