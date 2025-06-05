import { IsString, MinLength, IsEnum } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  readonly title: string;

  @IsString()
  @MinLength(1)
  readonly description: string;

  @IsEnum(TaskStatus)
  readonly status: TaskStatus;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
