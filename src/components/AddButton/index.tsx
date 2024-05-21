import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface IAddButton {
	onPress: () => void;
}

export const AddButton = ({ onPress }: IAddButton) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
				style={styles.buttonIcon}
				source={require("../../assets/plus_circle.png")}
			/>
    </TouchableOpacity>
  );
};
