import { connect } from 'react-redux'
import {
  addTodoList,
  deleteTodoList,
  changeTodoStatus,
  changeAllStatus,
  filterTodoList
} from '../modules/todoApp'

import HomeView from '../components/TodoApp'

const mapStateToProps = state => ({
  todos: state.todo.todos,
  visibilityFilter: state.todo.visibilityFilter
})

const mapActionCreators = {
  addTodoList,
  deleteTodoList,
  changeTodoStatus,
  changeAllStatus,
  filterTodoList
}

export default connect(mapStateToProps, mapActionCreators)(HomeView)
