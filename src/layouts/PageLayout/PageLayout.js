import React, { Component } from 'react'
// import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

class PageLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { children } = this.props

    return (
      <div className='page-layout__viewport'>
        {children}

        <footer className='info'>
          <p>Double-click to edit a todo</p>
          <p>Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a></p>
          <p>Created by <a href='http://todomvc.com'>you</a></p>
          <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
        </footer>
      </div>
    )
  }
}

export default PageLayout
