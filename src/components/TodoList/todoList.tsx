import React, { FC, useContext } from 'react';

import TodoItem from '../TodoItem';
import { ITodoList } from '../../types';
import './todoList.scss';
import { AppContext } from '../../hooks/appContexts';

const TodoList: FC<ITodoList> = (props: ITodoList) => {
  const {
    state: { todos },
  } = useContext(AppContext);

  return (
    <div className="main">
      <input type="checkbox" id="toggle-all" className="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
