import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './TodoApp.scss'
import TodoItem from 'vcms/TodoItem'
import Footer from 'vcms/Footer'

const ENTER_KEY = 13

class TodoApp extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string,
    addTodoList: PropTypes.func,
    deleteTodoList: PropTypes.func,
    changeTodoStatus: PropTypes.func,
    changeAllStatus: PropTypes.func,
    filterTodoList: PropTypes.func,
    clearAllCompleted: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      currentId: props.todos[props.todos.length - 1].id + 1,
      newTodo: '',
      todos: props.todos,
      visibilityFilter: props.visibilityFilter
    }
  }

  handleNewTodoChange = (evt) => {
    this.setState({
      newTodo: evt.target.value
    })
  }

  handledNewTodo = (evt) => {
    // console.log(evt.keyCode)
    if (evt.keyCode !== ENTER_KEY) return true

    evt.preventDefault()
    let { newTodo, currentId } = this.state
    // console.log(newTodo)
    // console.log(currentId)
    if (newTodo.trim()) {
      // console.log({
      //   id: currentId,
      //   text: newTodo,
      //   completed: false
      // })
      this.props.addTodoList({
        id: currentId,
        text: newTodo,
        completed: false
      })

      this.setState({
        newTodo: '',
        currentId: ++currentId
      })
    }
  }

  handleToggleAll = (evt) => {
    const { changeAllStatus } = this.props
    changeAllStatus(evt.target.checked)
  }

  render () {
    const {
      todos,
      deleteTodoList,
      changeTodoStatus,
      filterTodoList,
      clearAllCompleted,
      visibilityFilter
    } = this.props
    const { newTodo } = this.state

    let completedTodoCount = 0
    let todoCount = todos.length

    let todoShowList = todos.filter((item) => {
      if (item.completed) {
        completedTodoCount++
      }
      switch (visibilityFilter) {
        case 'SHOW_ALL':
          return item
        case 'ACTIVE':
          return !item.completed
        case 'COMPLETED':
          return item.completed
        default:
          return item
      }
    })

    let todoItems = todoShowList.map((item, index) => {
      return (
        <TodoItem todo={item} key={item.id} onDeleteItem={deleteTodoList} onToggleStatus={changeTodoStatus} />
      )
    })

    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>TodoMVC</h1>
          <input onChange={this.handleNewTodoChange} onKeyDown={this.handledNewTodo} value={newTodo} className='new-todo' placeholder='What needs to be done?' autoFocus />
        </header>
        <section className='main'>
          <input onChange={this.handleToggleAll} id='toggle-all' className='toggle-all' type='checkbox' checked={completedTodoCount === todoCount} />
          <label htmlFor='toggle-all'>Mark all as complete</label>
          <ul className='todo-list'>
            {todoItems}
          </ul>
        </section>
        <Footer leftItemCount={todoCount - completedTodoCount} filterTodoList={filterTodoList} clearAllCompleted={clearAllCompleted} />
      </section>
    )
  }
}

export default TodoApp
