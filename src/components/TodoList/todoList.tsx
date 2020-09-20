import React, { FC } from 'react';

import TodoItem from '../TodoItem';
import { ITodoForm } from '../../types';
import './todoList.scss';

const TodoForm: FC<ITodoForm> = (props: ITodoForm) => {
  const { todos, ...restProps } = props;

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} {...restProps} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
