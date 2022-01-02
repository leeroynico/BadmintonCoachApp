import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { color } from "./components/style/Style";
import StartButton from "./components/buttons/StartButton";

export default function App() {
  //importation des typo
  const [loaded] = useFonts({
    Pangolin: require("../assets/fonts/Pangolin-Regular.ttf"),
    Kanit: require("../assets/fonts/Kanit-Regular.ttf"),
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
  },
  title: {
    fontFamily: "Pangolin",
    fontSize: 40,
    color: "#f0e7d8",
  },
});
