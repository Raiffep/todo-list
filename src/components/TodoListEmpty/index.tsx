import React from "react";
import { View, Text } from "react-native";
import Icon from "../Icon";
import { homeStrings } from "../../screens/Home/locales";
import { styles } from "./styles";

const TodoListEmpty = () => {
  return (
    <View style={styles.container}>
      <Icon
        width={56}
        height={56}
        source={require("../../assets/todo_list.png")}
      />
      <Text style={styles.listEmptyTitle}>{homeStrings.listEmptyTitle}</Text>
      <Text style={styles.listEmptyDescription}>
        {homeStrings.listEmptyDescription}
      </Text>
    </View>
  );
};

export default TodoListEmpty;
