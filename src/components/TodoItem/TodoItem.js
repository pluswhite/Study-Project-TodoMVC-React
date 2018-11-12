import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object,
    onToggleStatus: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleItemStatusChange = (evt) => {
    const { onToggleStatus, todo } = this.props
    onToggleStatus(todo)
  }

  handleItemTextChange = () => {

  }

  render () {
    const { todo } = this.props
    // console.log(todo)
    const { text, completed } = todo

    let itemStyle = classnames({
      'completed': completed
    })

    return (
      <li className={itemStyle}>
        <div className='view'>
          <input className='toggle' type='checkbox' checked={completed} onChange={this.handleItemStatusChange} />
          <label>{text}</label>
          <button className='destroy' />
        </div>
        <input className='edit' value={text} onChange={this.handleItemTextChange} />
      </li>
    )
  }
}
