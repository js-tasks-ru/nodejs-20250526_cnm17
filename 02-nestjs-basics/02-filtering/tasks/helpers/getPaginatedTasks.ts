import { BadRequestException } from "@nestjs/common";
import { TasksPaginationType } from "tasks/query-params.dto";
import { Task } from "tasks/task.model";

interface Props {
  paginationParams: TasksPaginationType;
  tasks: Task[];
}

export const getPaginatedTasks = ({
  paginationParams,
  tasks,
}: Props): Task[] => {
  const { page, limit } = paginationParams;
  const errorMessage = "Missing query param -";

  if (!page) {
    throw new BadRequestException(null, `${errorMessage} page.`);
  }
  if (!limit) {
    throw new BadRequestException(null, `${errorMessage} limit.`);
  }

  const secondIndex = +page * +limit;
  const firstIndex = secondIndex - +limit;

  return tasks.slice(firstIndex, secondIndex);
};
