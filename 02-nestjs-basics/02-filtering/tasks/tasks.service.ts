import { Injectable } from "@nestjs/common";
import { Task } from "./task.model";
import { MOCK_TASKS } from "./tasks.mock";
import { getFilteredTasks, getPaginatedTasks, getSortedTasks } from "./helpers";
import { TasksParamsDto } from "./query-params.dto";

@Injectable()
export class TasksService {
  private initialTasks: Task[] = [...MOCK_TASKS];

  getTasks({ page, limit, status, sortBy }: TasksParamsDto): Task[] {
    let tasks = this.initialTasks;

    if (status) {
      tasks = getFilteredTasks({ status, tasks });
    }

    if (page || limit) {
      tasks = getPaginatedTasks({
        paginationParams: { page, limit },
        tasks,
      });
    }

    if (sortBy) {
      tasks = getSortedTasks({ sortBy, tasks });
    }

    return tasks;
  }
}
