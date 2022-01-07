import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { color } from "./components/style/Style";
import { useFonts } from "expo-font";
import { LinearProgress, Icon } from "react-native-elements";
import { useInterval } from "./components/UseInterval";
import { Speak } from "./components/speech/Speech";

import ResetButton from "./components/buttons/ResetButton";

export default function App() {
  //importation des typos
  const [loaded] = useFonts({
    Pangolin: require("./assets/fonts/Pangolin-Regular.ttf"),
    Kanit: require("./assets/fonts/Kanit-Regular.ttf"),
  });

  //make andn say random number
  const sayRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    Speak(randomNumber.toString());
    setRandomNumber(randomNumber);
  };

  const [randomNumber, setRandomNumber] = useState("");
  const [secondsMax, setSecondsMax] = useState(20);
  const [seconds, setSeconds] = useState(secondsMax);
  const [start, setStart] = useState("");
  const [delai, setDelai] = useState(3000);
  const [icon, setIcon] = useState("play-circle");

  //start train and reset it at the end
  useInterval(() => {
    if (start === "run") {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setIcon("play");
        Speak("c'est fini");
        setStart("");
        setSeconds(20);
      }
    }
  }, 1000);

  //speak random number
  useInterval(() => {
    if (start === "run") {
      if (seconds > 0) {
        sayRandomNumber(1, 6);
      }
    }
  }, delai);

  if (!loaded) {
    return <Text>loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Shadow Coach</Text>
        {seconds === secondsMax || 0 ? (
          <Text></Text>
        ) : (
          <Text style={styles.title}>{randomNumber}</Text>
        )}
        <View style={styles.buttons}>
          <View style={styles.button}>
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
                  setIcon("pause-circle");
                  setStart("run");
                }
              }}
            />
          </View>
          {seconds === secondsMax || 0 ? (
            <Text></Text>
          ) : (
            <View style={styles.button}>
              <Icon
                type="font-awesome"
                name={"stop-circle"}
                color={color.light}
                size={150}
                onPress={() => {
                  setStart("");
                  setIcon("play-circle");
                  setSeconds(secondsMax);
                }}
              />
            </View>
          )}
        </View>

        <LinearProgress
          variant="determinate"
          value={
            typeof seconds === "number" ? (seconds * 10) / (secondsMax * 10) : 0
          }
          color={color.blue}
          style={styles.progress}
        />
        <Text h4 style={styles.textChrono}>
          {seconds} / {secondsMax} sec
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.grey,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: color.light,
    fontFamily: "Kanit",
  },
  title: {
    fontFamily: "Kanit",
    fontSize: 40,
    color: color.light,
    marginBottom: 20,
  },
  progress: {
    marginTop: 20,
    height: 50,
    width: 300,
    borderRadius: 30,
  },
  textChrono: {
    color: "#f0e7d8",
    marginTop: -41,
    fontFamily: "Pangolin",
    marginBottom: 40,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 30,
  },
});
