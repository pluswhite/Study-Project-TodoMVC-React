import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { todo } = this.props
    // console.log(todo)
    const { text, completed } = todo

    return (
      <li>
        <div className='view'>
          <input className='toggle' type='checkbox' checked={completed} />
          <label>{text}</label>
          <button className='destroy' />
        </div>
        <input className='edit' value='Rule the web' />
      </li>
    )
  }
}
