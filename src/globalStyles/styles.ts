import { TextStyle, ViewStyle } from "react-native";
import { colors } from "./colors";

const SQUARE_BUTTON = {
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.addButton,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  text: {
    color: colors.white,
    fontSize: 24,
  } as TextStyle,
};

export { SQUARE_BUTTON };
