import React, { FC, useContext, useReducer } from 'react';
import './App.scss';

import { AppContext, initialState } from './hooks/appContexts';
import { appReducer } from './reducers/appReducer';

const Input: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      {state.newTodo}
      Input
    </div>
  );
};

const TodoList: FC = () => <>TodoList</>;
const Footer: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return <div>{state.visibility}</div>;
};

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
