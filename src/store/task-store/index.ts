import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface ITask {
  id: number;
  name: string;
}

const initialTask: ITask[] = [
  {
    id: 1,
    name: "task1",
  },
  {
    id: 2,
    name: "task2",
  },
];

export const useTaskStore = defineStore("task", () => {
  const tasks = ref<any>(initialTask);
  const getTasks = computed(() => tasks.value);

  const addTask = (task: string) => {
    const taskId = Number(tasks?.value[tasks?.value?.length - 1]?.id) + 1;

    tasks.value.push({
      id: tasks?.value?.length > 0 ? taskId : 1,
      name: task,
    });
  };

  const removeTask = (taskId: number) => {
    const index = tasks.value.findIndex((item: ITask) => item.id === taskId);

    tasks.value.splice(index, 1);
  };

  const editTask = (taskId: number, value: string) => {
    const index = tasks.value.findIndex((item: ITask) => item.id === taskId);

    tasks.value[index].name = value;
  };

  return { tasks, getTasks, addTask, removeTask, editTask };
});
