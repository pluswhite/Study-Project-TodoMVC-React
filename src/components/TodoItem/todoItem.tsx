import React, { ChangeEvent, FC } from 'react';

import { ITodoItem } from '../../types';
import './todoList.scss';

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const {
    todo,
    handleTodoComplete,
    handleTodoUpdate,
    handleTodoRemove,
    handleTodoBlur,
  } = props;

  return (
    <div className="todo-item">
      <div
        className="todo-item-status"
        onClick={() => handleTodoComplete(todo.id)}
      >
        {todo.isCompleted ? (
          <span className="todo-item-checked">✔️</span>
        ) : (
          <span className="todo-item-checked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <input
          className="todo-item-input"
          value={todo.text}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleTodoUpdate(event, todo.id)
          }
          onBlur={handleTodoBlur}
        />
      </div>
      <div
        className="todo-item-remove"
        onClick={() => handleTodoRemove(todo.id)}
      >
        ×
      </div>
    </div>
  );
};

export default TodoItem;
