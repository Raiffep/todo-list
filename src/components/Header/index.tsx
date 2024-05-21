import React from "react";
import { View } from "react-native";
import { Logo } from "../Logo";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};
