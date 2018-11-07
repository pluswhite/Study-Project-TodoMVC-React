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
      <div className='container text-center'>
        <h1>TodoMVC of React</h1>
        {/* <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
        <div className='page-layout__viewport'>
          {children}
        </div>
      </div>
    )
  }
}

export default PageLayout
