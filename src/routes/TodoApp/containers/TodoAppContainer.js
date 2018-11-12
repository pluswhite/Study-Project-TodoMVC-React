import { connect } from 'react-redux'
import {
  addTodoList,
  changeTodoStatus
} from '../modules/todoApp'

import HomeView from '../components/TodoApp'

const mapStateToProps = state => ({
  todos: state.todo.todos,
  visibilityFilter: state.todo.visibilityFilter
})

const mapActionCreators = {
  addTodoList,
  changeTodoStatus
}

export default connect(mapStateToProps, mapActionCreators)(HomeView)
