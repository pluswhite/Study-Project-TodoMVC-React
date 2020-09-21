import React, { FC, useContext, useReducer } from 'react';

import { AppContext, initialState } from './hooks/appContexts';
import { Actions, appReducer } from './reducers/appReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.scss';
import { ITodo } from './types';

const Footer: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a href="#" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#" className="">
            Active
          </a>
        </li>
        <li>
          <a href="#" className="">
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};

// AppProvider
const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

function App() {
  const { state, dispatch } = useContext(AppContext);
  const { todos } = state;

  const handleTodoUpdate = () => {};
  const handleTodoComplete = () => {};
  const handleTodoRemove = () => {};
  const handleTodoBlur = () => {};

  return (
    <AppProvider>
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <TodoForm />
        </header>
        <TodoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoComplete={handleTodoComplete}
          handleTodoRemove={handleTodoRemove}
          handleTodoBlur={handleTodoBlur}
        />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
