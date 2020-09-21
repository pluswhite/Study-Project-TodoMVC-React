/**
 * App Context
 */

import { createContext, Dispatch } from 'react';
import { IAppState } from '../types';

export enum VisibilityType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export const initialState: IAppState = {
  todos: [
    {
      id: '111',
      text: 'Test',
      isCompleted: false,
    },
  ],
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
