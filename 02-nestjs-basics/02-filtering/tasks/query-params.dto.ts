import { IsEnum, IsNumber, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";
import { TaskStatus } from "./task.model";

export enum SortVariant {
  ASC = "ASC",
  DESC = "DESC",
}

export class TasksPaginationType {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  readonly page: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  readonly limit: string;
}

export class TasksParamsDto extends TasksPaginationType {
  @IsEnum(TaskStatus)
  @IsOptional()
  readonly status: TaskStatus;

  @IsEnum(SortVariant)
  @IsOptional()
  readonly sortBy: SortVariant;
}
