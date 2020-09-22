/**
 * App Reducer
 */

import { VisibilityType } from '../hooks/appContexts';
import { IAppState, ITodo } from '../types';

export enum Actions {
  CREATE_ITEM = 'CREATE_ITEM', // 新增 Todo
  UPDATE_ITEM = 'UPDATE_ITEM', // 更新 Todo
  DELETE_ITEM = 'DELETE_ITEM', // 删除 Todo
  EDIT_ITEM = 'EDIT_ITEM', // 编辑 Todo
  EDIT_SET = 'EDIT_SET', // 设置当前编辑的 Todo
  CHANGE_VISIBILITY = 'CHANGE_VISIBILITY', // 改变显示类型
  REMOVE_COMPLETED = 'REMOVE_COMPLETED', // 删除状态为已完成的 Todo
  UPDATE_EDITING_ITEM = 'UPDATE_EDITING_ITEM ', // 更新当前编辑中的 Todo
  TOGGLE_ALL = 'TOGGLE_ALL', // 全部切换为 完成/未完成
  TOGGLE_ITEM = 'TOGGLE_ITEM', // 切换 todo 完成/未完成
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
}

export type TodoActions =
  | {
      type: Actions.CREATE_ITEM;
      payload: ITodo;
    }
  | {
      type: Actions.UPDATE_ITEM;
      payload: {
        id: string;
        text: string;
      };
    }
  | {
      type: Actions.DELETE_ITEM;
      payload: {
        id: string;
      };
    }
  | {
      type: Actions.TOGGLE_ALL;
      payload: {
        toggleStatus: boolean;
      };
    }
  | {
      type: Actions.TOGGLE_ITEM;
      payload: {
        id: string;
      };
    }
  | {
      type: Actions.CLEAR_COMPLETED;
    }
  | {
      type: Actions.CHANGE_VISIBILITY;
      payload: {
        visibility: VisibilityType;
      };
    };

export const appReducer = (state: IAppState, action: TodoActions) => {
  console.log(action);
  switch (action.type) {
    case Actions.CREATE_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case Actions.UPDATE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: todo.text,
            };
          } else {
            return todo;
          }
        }),
      };
    }
    case Actions.DELETE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case Actions.TOGGLE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          } else {
            return todo;
          }
        }),
      };
    }
    case Actions.TOGGLE_ALL: {
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isCompleted: action.payload.toggleStatus,
        })),
      };
    }
    case Actions.CLEAR_COMPLETED: {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
    }
    case Actions.CHANGE_VISIBILITY: {
      return {
        ...state,
        visibility: action.payload.visibility,
      };
    }
    default:
      return state;
  }
};
