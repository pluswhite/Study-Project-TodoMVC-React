import { connect } from 'react-redux'
import { addTodoList } from '../modules/todoApp'

import HomeView from '../components/TodoApp'

const mapStateToProps = state => ({
  todos: state.todo.todos,
  visibilityFilter: state.todo.visibilityFilter
})

const mapActionCreators = {
  addTodoList
}

export default connect(mapStateToProps, mapActionCreators)(HomeView)
