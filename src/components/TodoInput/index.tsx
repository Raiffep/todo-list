import React from "react";
import { TextInput, View } from "react-native";
import { homeStrings } from "../../screens/Home/locales";
import { colors } from "../../globalStyles";
import { styles } from "./styles";

interface ITodoInput {
	value: string;
	onChange: (text: string) => void;
}

const TodoInput = ({ value, onChange }: ITodoInput) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
			style={styles.container}
      placeholder={homeStrings.placeholder}
      placeholderTextColor={colors.placeholder}
    />
  );
};

export default TodoInput;
