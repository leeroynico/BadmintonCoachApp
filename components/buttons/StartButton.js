import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { color } from "../style/Style";
import { Speak } from "../speech/Speech";
import { useInterval } from "../UseInterval";

function StartButton(props) {
  // const sayRandomNumber = (min, max) => {
  //   const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  //   Speak(randomNumber.toString());
  //   props.setRandomNumber(randomNumber);
  // };

  // const [start, setStart] = useState(props.start);
  // const [delai, setDelai] = useState(3000);

  //start train and reset it at the end
  // useInterval(() => {
  //   if (start === "run") {
  //     if (props.seconds > 0) {
  //       props.setseconds(props.seconds - 1);
  //     } else {
  //       setIcon("play");
  //       Speak("c'est fini");
  //       setStart("");
  //       props.setseconds(20);
  //     }
  //   }
  // }, 1000);

  //speak random number
  // useInterval(() => {
  //   if (start === "run") {
  //     if (props.seconds > 0) {
  //       sayRandomNumber(1, 6);
  //     }
  //   }
  // }, delai);

  //const [icon, setIcon] = useState("play-circle");
  return (
    <View>
      <Icon
        type="font-awesome"
        name={props.icon}
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
            setIcon("pause-circle");
            setStart("run");
          }
        }}
      />
    </View>
  );
}

export default StartButton;
