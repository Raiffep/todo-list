import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type TTaskCounterProps = {
  text: string;
  colorText: string;
  counter: number;
};

export const TasksCounter = ({
  text,
  colorText,
  counter,
}: TTaskCounterProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.textTitle, color: colorText }}>{text}</Text>
      <View style={styles.counterTextView}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
    </View>
  );
};
