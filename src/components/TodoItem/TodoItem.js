import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <li>
        <div className='view'>
          <input className='toggle' type='checkbox' />
          <label>Buy a unicorn</label>
          <button className='destroy' />
        </div>
        <input className='edit' value='Rule the web' />
      </li>
    )
  }
}
