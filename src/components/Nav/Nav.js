import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import './Nav.scss'

class Nav extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { authenticated, dispatch } = this.props
    return (
      <div className="top_menu_bar">
        <div className="top_menu_list">
          <IndexLink className="btn" to='/' activeClassName='active'>
            Home
          </IndexLink>
          {/* <Link className="btn" to='/counter' activeClassName='active'>
            Counter
          </Link>
          <Link className="btn" to='/zen' activeClassName='active'>
            Zen
          </Link> */}
        </div>
      </div>
    );
  }
}

export default Nav;
