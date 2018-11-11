/**
 * Home module
 */

/**
 * Constants
 */
export const ADD_LIST_POSTS = 'ADD_LIST_POSTS'
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS'
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE'

export const CHANGE_TODO_STATUS_POSTS = 'CHANGE_TODO_STATUS_POSTS'
export const CHANGE_TODO_STATUS_SUCCESS = 'CHANGE_TODO_STATUS_SUCCESS'
export const CHANGE_TODO_STATUS_FAILURE = 'CHANGE_TODO_STATUS_FAILURE'

/**
 * Action Creators
 */
export const addListPosts = () => {
  return {
    type: ADD_LIST_POSTS
  }
}

export const addListSuccess = data => {
  return {
    type: ADD_LIST_SUCCESS,
    payload: {
      data
    }
  }
}

export const addListFailure = () => {
  return {
    type: ADD_LIST_FAILURE
  }
}

/**
 * Tools Methods
 */
export const addTodoList = (newTodo) => {
  return (dispatch) => {
    dispatch(addListPosts())
    try {
      dispatch(addListSuccess(newTodo))
    } catch (err) {
      dispatch(addListFailure())
    }
  }
}

/**
 * Action Handlers
 */
const TODO_APP_ACTION_HANDLERS = {
  [ADD_LIST_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [ADD_LIST_SUCCESS]: (state, action) => {
    // console.log(state)
    // console.log(action)
    return ({
      ...state,
      todos: state.todos.concat(action.payload.data),
      isLoading: false
    })
  },
  [ADD_LIST_FAILURE]: (state) => {
    return ({
      ...state,
      isLoading: false
    })
  },
}

/**
 * Reducer
 */
const initialState = {
  isLoading: false,
  todos: [
    {
      id: 0,
      text: 'Eat food',
      completed: true
    },
    {
      id: 1,
      text: 'Exercise',
      completed: false
    },
    {
      id: 2,
      text: 'Running',
      completed: false
    },
    {
      id: 3,
      text: 'Reading',
      completed: false
    },
  ],
  visibilityFilter: 'SHOW_ALL'
}

export default function TotodAPPReducer (state = initialState, action) {
  const handler = TODO_APP_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
