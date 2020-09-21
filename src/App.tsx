import React, { FC, useContext, useReducer } from 'react';

import { AppContext, initialState } from './hooks/appContexts';
import { appReducer } from './reducers/appReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import './App.scss';

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

  return (
    <AppProvider>
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <TodoForm />
        </header>
        <TodoList todos={todos} />
        <TodoFooter />
      </div>
    </AppProvider>
  );
}

export default App;
