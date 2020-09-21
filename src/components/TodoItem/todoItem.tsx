import React, { ChangeEvent, FC, useContext } from 'react';
import { AppContext } from '../../hooks/appContexts';
import { Actions } from '../../reducers/appReducer';

import { ITodoItem } from '../../types';
import './todoItem.scss';

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const { dispatch } = useContext(AppContext);
  const { todo, handleTodoBlur } = props;

  const handleTodoToggle = () => {
    dispatch({
      type: Actions.TOGGLE_ITEM,
      payload: {
        id: todo.id,
      },
    });
  };

  const handleTodoRemove = () => {
    dispatch({
      type: Actions.DELETE_ITEM,
      payload: {
        id: todo.id,
      },
    });
  };

  const handleTodoUpdate = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    dispatch({
      type: Actions.UPDATE_ITEM,
      payload: {
        id,
        text: event.target.value,
      },
    });
  };

  return (
    <div className="view todo-item">
      <input
        type="checkbox"
        checked={todo.isCompleted ? true : false}
        className="toggle"
        onClick={handleTodoToggle}
      />
      <label>{todo.text}</label>
      <button className="destroy" onClick={handleTodoRemove}></button>
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
