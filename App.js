import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { color } from "./components/style/Style";
import StartButton from "./components/buttons/StartButton";
import { useFonts } from "expo-font";
import { LinearProgress } from "react-native-elements";

export default function App() {
  //importation des typos
  const [loaded] = useFonts({
    Pangolin: require("./assets/fonts/Pangolin-Regular.ttf"),
    Kanit: require("./assets/fonts/Kanit-Regular.ttf"),
  });
  const [randomNumber, setRandomNumber] = useState("");
  const secondsMax = 20;
  const [seconds, setseconds] = useState(20);
  if (!loaded) {
    return <Text>loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Shadow Coach</Text>
        <Text style={styles.title}>{randomNumber}</Text>
        <StartButton
          setRandomNumber={setRandomNumber}
          setseconds={setseconds}
        />
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
});
