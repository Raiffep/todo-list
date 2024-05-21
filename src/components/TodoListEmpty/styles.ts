import { StyleSheet } from "react-native";
import { colors } from "../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  listEmptyTitle: {
    color: colors.placeholder,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
  },
  listEmptyDescription: {
    color: colors.placeholder,
    textAlign: "center",
    fontSize: 14,
    marginTop: 5,
  },
});
