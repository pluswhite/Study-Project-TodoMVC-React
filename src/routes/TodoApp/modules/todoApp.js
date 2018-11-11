/**
 * Home module
 */

/**
 * Constants
 */
export const UPDATE_LIST_POSTS = 'UPDATE_LIST_POSTS'
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS'
export const UPDATE_LIST_FAILURE = 'UPDATE_LIST_FAILURE'

/**
 * Action Creators
 */
export const updateListPosts = () => {
  return {
    type: UPDATE_LIST_POSTS
  }
}

export const updateListSuccess = data => {
  return {
    type: UPDATE_LIST_SUCCESS,
    payload: {
      data
    }
  }
}

export const updateListFailure = () => {
  return {
    type: UPDATE_LIST_FAILURE
  }
}

/**
 * Tools Methods
 */
export const updateTodoList = () => {
  return (dispatch) => {
    dispatch(updateListPosts())
    dispatch(updateListSuccess())
  }
}

/**
 * Action Handlers
 */
const TODO_APP_ACTION_HANDLERS = {
  [UPDATE_LIST_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [UPDATE_LIST_SUCCESS]: (state, action) => {
    return ({
      ...state,
      isLoading: false
    })
  },
  [UPDATE_LIST_FAILURE]: (state) => {
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
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}

export default function TotodAPPReducer (state = initialState, action) {
  const handler = TODO_APP_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
