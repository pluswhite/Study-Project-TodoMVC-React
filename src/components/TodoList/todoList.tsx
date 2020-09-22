import React, { FC, useContext, useRef } from 'react';

import TodoItem from '../TodoItem';
import { ITodoList } from '../../types';
import './todoList.scss';
import { AppContext } from '../../hooks/appContexts';
import { Actions } from '../../reducers/appReducer';

const TodoList: FC<ITodoList> = (props: ITodoList) => {
  const {
    state: { todos },
    dispatch,
  } = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTodoToggleAll = () => {
    console.log(inputRef.current?.checked);
    dispatch({
      type: Actions.TOGGLE_ALL,
      payload: {
        toggleStatus: !inputRef.current?.checked,
      },
    });
  };

  return (
    <div className="main">
      <input
        ref={inputRef}
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
      />
      <label htmlFor="toggle-all" onClick={() => handleTodoToggleAll()}>
        Mark all as complete
      </label>
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
