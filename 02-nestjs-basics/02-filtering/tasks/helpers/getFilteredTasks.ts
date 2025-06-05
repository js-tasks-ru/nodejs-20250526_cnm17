import { Task, TaskStatus } from "tasks/task.model";

interface Props {
  status: TaskStatus;
  tasks: Task[];
}

export const getFilteredTasks = ({ status, tasks }: Props): Task[] => {
  return tasks.filter((task) => task.status === status);
};
