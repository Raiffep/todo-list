import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { colors } from "../../globalStyles";
import { useHome } from "./hooks";
import { Header } from "../../components/Header";
import { AddButton } from "../../components/AddButton";
import TodoInput from "../../components/TodoInput";
import { TasksCounter } from "../../components/TasksCounter";
import TodoListEmpty from "../../components/TodoListEmpty";

export const Home = () => {
  const {
    tasks,
    newTask,
    completedTasks,
    callRemoveTaskAlert,
    handleAddTask,
    onChangeNewTask,
    handleCheckTask,
  } = useHome();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TodoInput value={newTask} onChange={onChangeNewTask} />
          <AddButton onPress={handleAddTask} />
        </View>
        <View style={styles.tasksCounterView}>
          <TasksCounter
            text="Criadas"
            counter={tasks?.length}
            colorText={colors.lightBlue}
          />
          <TasksCounter
            text="Concluídas"
            counter={completedTasks}
            colorText={colors.purple}
          />
        </View>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task
              data={item}
              onCheck={() => handleCheckTask(item?.id)}
              onRemove={() => callRemoveTaskAlert(item)}
            />
          )}
          ListEmptyComponent={<TodoListEmpty />}
        />
      </View>
    </>
  );
};
