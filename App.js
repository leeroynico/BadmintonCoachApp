import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { color } from "./components/style/Style";
import StartButton from "./components/buttons/StartButton";
import { useFonts } from "expo-font";

export default function App() {
  //importation des typos
  const [loaded] = useFonts({
    Pangolin: require("./assets/fonts/Pangolin-Regular.ttf"),
    Kanit: require("./assets/fonts/Kanit-Regular.ttf"),
  });

  if (!loaded) {
    return <Text>loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Shadow Coach</Text>

        <Text style={styles.text}>bonjour le monde</Text>
        <StartButton />
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
    flex: 0.1,
    fontFamily: "Kanit",
    fontSize: 40,
    color: color.light,
  },
});
