import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useRef,
  useState,
  useContext,
} from 'react';
import shortid from 'shortid';
import { AppContext } from '../../hooks/appContexts';
import { Actions } from '../../reducers/appReducer';

import { ITodo, ITodoForm } from '../../types';
import './todoForm.scss';

const TodoForm: FC<ITodoForm> = (props: ITodoForm) => {
  const { dispatch } = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState('');

  const handleTodoCreate = (todo: ITodo) => {
    console.log(todo);
    dispatch({
      type: Actions.CREATE_ITEM,
      payload: todo,
    });
  };

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
        setFormState('');
      }
    }
  };

  return (
    <div className="todo-form">
      <input
        className="new-todo"
        ref={inputRef}
        type="text"
        placeholder="What needs to be done?"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;
