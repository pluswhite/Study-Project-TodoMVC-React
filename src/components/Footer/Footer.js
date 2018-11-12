import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  // static propTypes = {
  //   infos: PropTypes
  // }

  constructor (props) {
    super(props)
    this.state = {
      // infos: props.infos
    }
  }

  render () {
    return (
      <footer className='footer'>
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
      </footer>
    )
  }
}
