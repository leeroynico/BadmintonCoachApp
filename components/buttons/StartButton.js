import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, LinearProgress, Overlay } from "react-native-elements";
import { color } from "../style/Style";

function StartButton() {
  const [icon, setIcon] = useState("play-circle");
  return (
    <View>
      <Icon type="font-awesome" name={icon} size={150} color={color.red} />
    </View>
  );
}

export default StartButton;
