import { Task } from "tasks/task.model";

interface Props {
  sortBy: "ASC" | "DESC";
  tasks: Task[];
}

export const getSortedTasks = ({ sortBy, tasks }: Props): Task[] => {
  const isASC = sortBy === "ASC";

  return tasks.sort((a, b) => {
    const nameA = a.status.toLowerCase();
    const nameB = b.status.toLowerCase();

    if (nameA < nameB) {
      return isASC ? -1 : 1;
    }
    if (nameA > nameB) {
      return isASC ? 1 : -1;
    }

    return 0;
  });
};
