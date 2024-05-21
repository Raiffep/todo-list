import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Key } from "react";
import Icon from "../Icon";

export type TTaskData = {
  id: Key;
  name: string;
  checked: boolean;
};

interface TTaskProps {
  data: TTaskData;
  onCheck: () => void;
  onRemove: () => void;
}

export const Task = ({
  data,
  onCheck,
  onRemove,
}: TTaskProps) => {
  const { id, name } = data;
  return (
    <View style={styles.container} key={id}>
      <TouchableOpacity onPress={onCheck}
        style={[styles.check, data?.checked ? styles.checked : styles.notChecked]}
      >
        {data?.checked && (
          <Icon
            width={9}
            height={6}
            source={require("../../assets/check.png")}
          />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.checkText,
          data?.checked ? styles.checkedText : styles.notCheckedText,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Icon
          width={14}
          height={14}
          source={require("../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
