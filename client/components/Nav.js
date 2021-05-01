import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      auth: {},
    };
  }

  logout() {
    window.localStorage.removeItem('token');
    this.setState({ auth: {} });
  }

  render() {
    return (
      <div>
        <h1>Navbar component at your service</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Nav);
