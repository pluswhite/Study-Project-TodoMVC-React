import React, { ChangeEvent, FC } from 'react';

import { ITodoItem } from '../../types';
import './todoItem.scss';

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const {
    todo,
    handleTodoComplete,
    handleTodoUpdate,
    handleTodoRemove,
    handleTodoBlur,
  } = props;

  return (
    <div className="view todo-item">
      <input
        type="checkbox"
        checked={todo.isCompleted ? true : false}
        className="toggle"
      />
      <label>{todo.text}</label>
      <button className="destroy"></button>
      <input
        className="edit"
        value={todo.text}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleTodoUpdate(event, todo.id)
        }
        onBlur={handleTodoBlur}
      />
    </div>
  );
};

export default TodoItem;
