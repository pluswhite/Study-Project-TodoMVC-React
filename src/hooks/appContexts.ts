/**
 * App Context
 */

import { createContext, Dispatch } from 'react';

export enum VisibilityType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export type IAppState = {
  todos: string[];
  newTodo: string;
  editTodo: string;
  visibility: VisibilityType;
};

export const initialState: IAppState = {
  todos: [],
  newTodo: '',
  editTodo: '',
  visibility: VisibilityType.ALL,
};

export const AppContext = createContext<{
  state: IAppState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
