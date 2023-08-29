// src/todo/dto/create-todo.dto.ts
import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
