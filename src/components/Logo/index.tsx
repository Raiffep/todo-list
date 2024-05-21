import { Image } from "react-native";
import { styles } from "./styles";

export const Logo = () => (
  <Image
    style={styles.container}
    source={require("../../assets/todo_logo.png")}
  />
);
