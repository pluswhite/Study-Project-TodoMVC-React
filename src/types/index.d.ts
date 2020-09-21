/**
 * Types definition
 */

import { ChangeEvent } from 'react';

// Todo Interface
export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

// TodoForm Interface
export interface ITodoForm {
  // todos: ITodo[];
  handleTodoCreate?: (todo: ITodo) => void;
}

// TodoList Interface
export interface ITodoList {
  todos: ITodo[];
  handleTodoUpdate: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: ChangeEvent<HTMLInputElement>) => void;
}

// TodoItem Interface
export interface ITodoItem {
  todo: ITodo;
  handleTodoUpdate: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type IAppState = {
  todos: ITodo[];
  newTodo: string;
  editTodo: string;
  visibility: VisibilityType;
};
