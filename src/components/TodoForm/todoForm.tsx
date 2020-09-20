import React, { ChangeEvent, KeyboardEvent, FC, useRef, useState } from 'react';
import shortid from 'shortid';

import { ITodo, ITodoForm } from '../../types';
import './todoList.scss';

const TodoForm: FC<ITodoForm> = (props: ITodoForm) => {
  const { todos, handleTodoCreate } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTodo: ITodo = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false,
      };

      // Create new todo item
      handleTodoCreate(newTodo);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;
