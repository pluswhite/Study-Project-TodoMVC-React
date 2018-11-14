import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
    leftItemCount: PropTypes.number,
    filterTodoList: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      active: 'SHOW_ALL'
    }
  }

  handleListFiler = (filter, evt) => {
    const { filterTodoList } = this.props
    filterTodoList(filter)
    this.setState({
      active: filter
    })
  }

  render () {
    const { leftItemCount } = this.props
    const { active } = this.state

    return (
      <footer className='footer'>
        <span className='todo-count'><strong>{leftItemCount || 0}</strong> item left</span>
        <ul className='filters'>
          <li>
            <a className={active === 'SHOW_ALL' ? 'selected' : ''} href='#/' onClick={(evt) => this.handleListFiler('SHOW_ALL', evt)}>All</a>
          </li>
          <li>
            <a className={active === 'ACTIVE' ? 'selected' : ''} href='#/active' onClick={(evt) => this.handleListFiler('ACTIVE', evt)}>Active</a>
          </li>
          <li>
            <a className={active === 'COMPLETED' ? 'selected' : ''} href='#/completed' onClick={(evt) => this.handleListFiler('COMPLETED', evt)}>Completed</a>
          </li>
        </ul>
        <button className='clear-completed'>Clear completed</button>
      </footer>
    )
  }
}
