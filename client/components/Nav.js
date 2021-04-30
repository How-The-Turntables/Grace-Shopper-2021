import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Navbar component at your service</h1>
        <Link to="/">Home</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default Nav;
