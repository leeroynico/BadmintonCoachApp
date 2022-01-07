import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "../style/Style";

export default function ResetButton(props) {
  return (
    <View>
      <Icon
        name="stop-circle"
        color={color.light}
        type="font-awesome"
        size={140}
        onPress={() => {
          props.setStop("stop");
        }}
      />
    </View>
  );
}
