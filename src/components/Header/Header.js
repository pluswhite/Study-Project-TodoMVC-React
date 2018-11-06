import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import Nav from '../../containers/NavContainer'

class Header extends Component {
  render() {
    // console.log(this.props)
    // console.log(FaUser)
    return (
      <div id="indexHeader" className="header">
        <div className="top_bar">
          <div className="abs_m">
            TodoMVC of React
          </div>
        </div>
        <Nav />
      </div>
    )
  }
}

export default Header
