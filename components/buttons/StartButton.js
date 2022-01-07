import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, LinearProgress, Overlay } from "react-native-elements";
import { color } from "../style/Style";
import { Speak } from "../speech/Speech";
import { useInterval } from "../UseInterval";

function StartButton(props) {
  const sayRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    Speak(randomNumber.toString());
    props.setRandomNumber(randomNumber);
  };

  const [start, setStart] = useState("");
  const [seconds, setSeconds] = useState(20);
  const [delai, setDelai] = useState(3000);

  //gestion du démarrage de l'entrainement à la seconde et remise à zéro variable
  useInterval(() => {
    if (start === "run") {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        props.setseconds(seconds - 1);
      } else {
        setIcon("play");
        Speak("c'est fini");
        setStart("");
        setSeconds(20);
      }
    }
  }, 1000);

  //gestion de l'énoncé des numéros au hazard
  useInterval(() => {
    if (start === "run") {
      if (seconds > 0) {
        sayRandomNumber(1, 6);
      }
    }
  }, delai);

  const [icon, setIcon] = useState("play-circle");
  return (
    <View>
      <Icon
        type="font-awesome"
        name={icon}
        size={150}
        color={color.red}
        onPress={() => {
          if (start === "") {
            setIcon("pause-circle");
            Speak("allez on y va");
            setStart("run");
          } else if (start === "run") {
            setIcon("play-circle");
            setStart("pause");
          } else if (start === "pause") {
            setIcon("play-circle");
            setStart("run");
          }
        }}
      />
    </View>
  );
}

export default StartButton;
