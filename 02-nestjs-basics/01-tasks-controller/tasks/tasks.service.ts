import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto, Task, UpdateTaskDto } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  createTask(task: CreateTaskDto): Task {
    const arrLength = this.tasks.length;

    const newTask: Task = {
      ...task,
      id: arrLength ? `${+this.tasks[arrLength - 1].id + 1}` : "1",
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: string, update: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const index = this.tasks.indexOf(task);

    const updateTask = {
      ...task,
      ...update,
    };

    this.tasks.splice(index, 1, updateTask);

    return updateTask;
  }

  deleteTask(id: string): Task {
    const task = this.getTaskById(id);
    const index = this.tasks.indexOf(task);

    this.tasks.splice(index, 1);

    return task;
  }
}
