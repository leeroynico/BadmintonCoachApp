import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TimePicker } from "react-native-simple-time-picker";
import { Button, Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

function SettingsShadow(props) {
  const minutes = Math.floor(props.seconds / 60);
  const pickerRef = React.useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }

  return (
    <View>
      <Text>choisis une durée pour ton exercice</Text>
      <TimePicker
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
      <Picker
        ref={pickerRef}
        selectedValue={props.delai.toString()}
        onValueChange={(itemValue, itemIndex) =>
          props.setDelai(parseInt(itemValue, 10))
        }
      >
        <Picker.Item label="tranquille" value="5000" />
        <Picker.Item label="normal" value="3000" />
        <Picker.Item label="warrior" value="2000" />
      </Picker>
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
