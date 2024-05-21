import { StyleSheet } from "react-native";
import { SQUARE_BUTTON, colors } from "../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: colors.inputColor,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.darkestGray,
    borderRadius: 10,
  },
  check: {
    width: 17.45,
    height: 17.45,
    borderRadius: 17.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  notChecked: {
    borderColor: colors.lightBlue,
  },
  checked: {
    borderColor: colors.purple,
    backgroundColor: colors.purple
  },
  checkText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 15,
  },
  notCheckedText: {
    color: colors.white
  },
  checkedText: {
    color: colors.placeholder,
    textDecorationLine: 'line-through'
  },
  button: {
    ...SQUARE_BUTTON.button,
    backgroundColor: colors.red,
  },
  buttonText: SQUARE_BUTTON.text,
});
