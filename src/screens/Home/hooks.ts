import { Key, useCallback, useState } from "react";
import { TTaskData } from "../../components/Task";
import { Alert } from "react-native";
import { homeStrings } from "./locales";

export const useHome = () => {
  const [tasks, setTasks] = useState<Array<TTaskData>>([]);
  const [newTask, setNewTask] = useState<string>("");

  const onChangeNewTask = useCallback((task: string) => setNewTask(task), []);

  const handleOrderTasksArray = (tasksData: Array<TTaskData>) => {
    const notCheckedTasks = tasksData?.filter(task => !task.checked);
    const checkedTasks = tasksData?.filter(task => task.checked);

    setTasks([...notCheckedTasks, ...checkedTasks]);
  };

  const handleAddTask = useCallback(() => {
    const newTaskData: TTaskData = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: newTask,
      checked: false,
    };

    handleOrderTasksArray([...tasks, newTaskData]);
    setNewTask("");
  }, [newTask, tasks]);

  const handleCheckTask = useCallback(
    (taskId: Key) => {
      const newTasks = tasks.map(task => {
        if (task.id === taskId) task.checked = !task.checked;

        return task;
      });

      handleOrderTasksArray(newTasks);
    },
    [tasks]
  );

  const handleRemoveTask = useCallback((taskData: TTaskData) => {
    const newTasks = tasks.filter((task) => task?.id !== taskData?.id);

    handleOrderTasksArray(newTasks);
  }, [tasks]);

  const callRemoveTaskAlert = useCallback((taskData: TTaskData) => {
    Alert.alert(
      homeStrings.removeAlertTitle,
      homeStrings.removeAlertDescription(taskData?.name),
      [
        {
          text: homeStrings.removeAlertConfirmButton,
          onPress: () => handleRemoveTask(taskData),
        },
        {
          text: homeStrings.removeAlertCancelButton,
          style: "cancel",
        },
      ]
    );
  }, [tasks]);

  const completedTasks = tasks?.filter(task => task?.checked)?.length;

  return {
    tasks,
    newTask,
    completedTasks,
    callRemoveTaskAlert,
    handleAddTask,
    onChangeNewTask,
    handleCheckTask,
  };
};
