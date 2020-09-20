import React, { FC, useContext, useReducer } from 'react';

import { AppContext, initialState } from './hooks/appContexts';
import { appReducer } from './reducers/appReducer';

import './App.scss';

const Input: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      {state.newTodo}
      Input
    </div>
  );
};

const TodoItem: FC = () => <div>Item</div>;

const TodoList: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { todos } = state;
  return <>TodoList</>;
};

const Footer: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return <div>{state.visibility}</div>;
};

// AppProvider
const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

function App() {
  return (
    <AppProvider>
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <Input />
        </header>
        <TodoList />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
