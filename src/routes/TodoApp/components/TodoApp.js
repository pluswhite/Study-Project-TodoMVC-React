import React, { Component } from 'react'
import propTypes from 'prop-types'
// import './TodoApp.scss'
import TodoItem from 'vcms/TodoItem'
import Footer from 'vcms/Footer'

const ENTER_KEY = 13

class TodoApp extends Component {
  static propTypes = {
    todos: propTypes.array.isRequired,
    visibilityFilter: propTypes.string,
    addTodoList: propTypes.func
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
      console.log({
        id: currentId,
        text: newTodo,
        completed: false
      })
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

  render () {
    const { todos } = this.props
    const { newTodo } = this.state

    let todoShowList = todos.map((item, index) => {
      return (
        <TodoItem todo={item} key={item.id} />
      )
    })

    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>TodoMVC</h1>
          <input onChange={this.handleNewTodoChange} onKeyDown={this.handledNewTodo} value={newTodo} className='new-todo' placeholder='What needs to be done?' autoFocus />
        </header>
        <section className='main'>
          <input id='toggle-all' className='toggle-all' type='checkbox' />
          <label htmlFor='toggle-all'>Mark all as complete</label>
          <ul className='todo-list'>
            {todoShowList}
            {/* <li className='completed'>
              <div className='view'>
                <input className='toggle' type='checkbox' checked />
                <label>Taste JavaScript</label>
                <button className='destroy' />
              </div>
              <input className='edit' value='Create a TodoMVC template' />
            </li>
            <li>
              <div className='view'>
                <input className='toggle' type='checkbox' />
                <label>Buy a unicorn</label>
                <button className='destroy' />
              </div>
              <input className='edit' value='Rule the web' />
            </li>
            <li>
              <div className='view'>
                <input className='toggle' type='checkbox' />
                <label>Buy a unicorn</label>
                <button className='destroy' />
              </div>
              <input className='edit' value='Rule the web' />
            </li>
            <li>
              <div className='view'>
                <input className='toggle' type='checkbox' />
                <label>Buy a unicorn</label>
                <button className='destroy' />
              </div>
              <input className='edit' value='Rule the web' />
            </li> */}
          </ul>
        </section>
        <Footer />
        {/* <footer className='footer'>
          <span className='todo-count'><strong>0</strong> item left</span>
          <ul className='filters'>
            <li>
              <a className='selected' href='#/'>All</a>
            </li>
            <li>
              <a href='#/active'>Active</a>
            </li>
            <li>
              <a href='#/completed'>Completed</a>
            </li>
          </ul>
          <button className='clear-completed'>Clear completed</button>
        </footer> */}
      </section>
    )
  }
}

export default TodoApp
