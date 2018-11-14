/**
 * Home module
 */

/**
 * Constants
 */
export const ADD_ITEM_POSTS = 'ADD_ITEM_POSTS'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE'

export const DELETE_ITEM_POSTS = 'DELETE_ITEM_POSTS'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE'

export const CHANGE_TODO_STATUS_POSTS = 'CHANGE_TODO_STATUS_POSTS'
export const CHANGE_TODO_STATUS_SUCCESS = 'CHANGE_TODO_STATUS_SUCCESS'
export const CHANGE_TODO_STATUS_FAILURE = 'CHANGE_TODO_STATUS_FAILURE'

export const CHANGE_ALL_STATUS_POSTS = 'CHANGE_ALL_STATUS_POSTS'
export const CHANGE_ALL_STATUS_SUCCESS = 'CHANGE_ALL_STATUS_SUCCESS'
export const CHANGE_ALL_STATUS_FAILURE = 'CHANGE_ALL_STATUS_FAILURE'

export const FILTER_TODO_LIST_POSTS = 'FILTER_TODO_LIST_POSTS'
export const FILTER_TODO_LIST_SUCCESS = 'FILTER_TODO_LIST_SUCCESS'
export const FILTER_TODO_LIST_FAILURE = 'FILTER_TODO_LIST_FAILURE'

/**
 * Action Creators
 */
// Add item to list
export const addItemPosts = () => {
  return {
    type: ADD_ITEM_POSTS
  }
}

export const addItemSuccess = data => {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: {
      data
    }
  }
}

export const addItemFailure = () => {
  return {
    type: ADD_ITEM_FAILURE
  }
}

// Delete item from list
export const deleteItemPosts = () => {
  return {
    type: DELETE_ITEM_POSTS
  }
}

export const deleteItemSuccess = data => {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: {
      data
    }
  }
}

export const deleteItemFailure = () => {
  return {
    type: DELETE_ITEM_FAILURE
  }
}

// Change item's status
export const changeTodoStatusPosts = () => {
  return {
    type: CHANGE_TODO_STATUS_POSTS
  }
}

export const changeTodoStatusSuccess = (data) => {
  return {
    type: CHANGE_TODO_STATUS_SUCCESS,
    payload: {
      data
    }
  }
}

export const changeTodoStatusFailure = () => {
  return {
    type: CHANGE_TODO_STATUS_FAILURE
  }
}

// Change all item's status
export const changeAllStatusPosts = () => {
  return {
    type: CHANGE_ALL_STATUS_POSTS
  }
}

export const changeAllStatusSuccess = (data) => {
  return {
    type: CHANGE_ALL_STATUS_SUCCESS,
    payload: {
      data
    }
  }
}

export const changeAllStatusFailure = () => {
  return {
    type: CHANGE_ALL_STATUS_FAILURE
  }
}

// Filter todo list
export const filterAllTodoPosts = () => {
  return {
    type: FILTER_TODO_LIST_POSTS
  }
}

export const filterAllTodoSuccess = (data) => {
  return {
    type: FILTER_TODO_LIST_SUCCESS,
    payload: {
      data
    }
  }
}

export const filterAllTodoFailure = () => {
  return {
    type: FILTER_TODO_LIST_FAILURE
  }
}

/**
 * Action Methods
 */
export const addTodoList = (newTodo) => {
  return (dispatch) => {
    dispatch(addItemPosts())
    try {
      dispatch(addItemSuccess(newTodo))
    } catch (err) {
      dispatch(addItemFailure())
    }
  }
}

export const deleteTodoList = (todo) => {
  return (dispatch) => {
    dispatch(deleteItemPosts())
    try {
      dispatch(deleteItemSuccess(todo))
    } catch (err) {
      dispatch(deleteItemFailure())
    }
  }
}

export const changeTodoStatus = (todo) => {
  return (dispatch) => {
    dispatch(changeTodoStatusPosts())
    try {
      dispatch(changeTodoStatusSuccess(todo))
    } catch (err) {
      dispatch(changeTodoStatusFailure())
    }
  }
}

export const changeAllStatus = (status) => {
  return (dispatch) => {
    dispatch(changeAllStatusPosts())
    try {
      dispatch(changeAllStatusSuccess(status))
    } catch (err) {
      dispatch(changeAllStatusFailure())
    }
  }
}

export const filterTodoList = (filter) => {
  return (dispatch) => {
    dispatch(filterAllTodoPosts())
    try {
      dispatch(filterAllTodoSuccess(filter))
    } catch (err) {
      dispatch(filterAllTodoFailure())
    }
  }
}

/**
 * Tools Methods
 */

const deleteItemCallback = (todo, todoList) => {
  let newTodoList = todoList.filter((item) => {
    if (todo.id !== item.id) {
      return item
    }
  })

  return newTodoList
}

const changeItemStatus = (todo, todoList) => {
  let newTodoList = todoList.map((item) => {
    if (todo.id === item.id) {
      return {
        ...item,
        completed: !todo.completed
      }
    }
    return item
  })

  return newTodoList
}

const changeAllItemsStatus = (status, todoList) => {
  let newTodoList = todoList.map((item) => {
    return {
      ...item,
      completed: status
    }
  })

  return newTodoList
}

/**
 * Action Handlers
 */
const TODO_APP_ACTION_HANDLERS = {
  // Add todo actions
  [ADD_ITEM_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [ADD_ITEM_SUCCESS]: (state, action) => {
    // console.log(state)
    // console.log(action)
    return ({
      ...state,
      todos: state.todos.concat(action.payload.data),
      isLoading: false
    })
  },
  [ADD_ITEM_FAILURE]: (state) => {
    return ({
      ...state,
      isLoading: false
    })
  },
  // Delete todo actions
  [DELETE_ITEM_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [DELETE_ITEM_SUCCESS]: (state, action) => {
    // console.log(state)
    // console.log(action)
    return ({
      ...state,
      todos: deleteItemCallback(action.payload.data, state.todos),
      isLoading: false
    })
  },
  [DELETE_ITEM_FAILURE]: (state) => {
    return ({
      ...state,
      isLoading: false
    })
  },
  // Change todo status actions
  [CHANGE_TODO_STATUS_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [CHANGE_TODO_STATUS_SUCCESS]: (state, action) => {
    return ({
      ...state,
      todos: changeItemStatus(action.payload.data, state.todos),
      isLoading: false
    })
  },
  [CHANGE_TODO_STATUS_FAILURE]: (state) => {
    return ({
      ...state,
      isLoading: false
    })
  },
  // Change all todos status actions
  [CHANGE_ALL_STATUS_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [CHANGE_ALL_STATUS_SUCCESS]: (state, action) => {
    return ({
      ...state,
      todos: changeAllItemsStatus(action.payload.data, state.todos),
      isLoading: false
    })
  },
  [CHANGE_ALL_STATUS_FAILURE]: (state) => {
    return ({
      ...state,
      isLoading: false
    })
  },
  [FILTER_TODO_LIST_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [FILTER_TODO_LIST_SUCCESS]: (state, action) => {
    return ({
      ...state,
      visibilityFilter: action.payload.data,
      isLoading: false
    })
  },
  [FILTER_TODO_LIST_FAILURE]: (state) => {
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

export default function TotodAppReducer (state = initialState, action) {
  const handler = TODO_APP_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
