import { StyleSheet } from "react-native";
import { colors } from "../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
	textTitle: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	blueText: {
		color: colors.lightBlue,
	},
	purpleText: {
		color: colors.purple,
	},
	counterTextView:{
		width: 25,
		height: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.darkestGray,
		marginLeft: 10,
		borderRadius: 10
	},
	counterText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: colors.lightGray,
	},
});
