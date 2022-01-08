import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TimePicker } from "react-native-simple-time-picker";
import { Button, Icon } from "react-native-elements";

function SettingsShadow(props) {
  const minutes = Math.floor(props.seconds / 60);

  return (
    <View>
      <Text>choisis une durée pour ton exercice</Text>
      <TimePicker
        // value={{ minutes: minutes, seconds: props.seconds }}
        pickerShows={["minutes", "seconds"]}
        secondsInterval={10}
        minutesUnit="min"
        secondsUnit="sec"
        onChange={(object) => {
          props.setSecondsMax(object.minutes * 60 + object.seconds);
          props.setSeconds(object.minutes * 60 + object.seconds);
        }}
      />
      <Text>choisis une difficulté</Text>
      <Button
        icon={
          <Icon
            type="ionicon"
            name="checkmark-done-outline"
            color="white"
            size={20}
          />
        }
        iconRight
        title=" OK "
        onPress={() => {
          props.setVisible(false);
        }}
      />
    </View>
  );
}

const SettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
  },
});

export default SettingsShadow;
