import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newGuestCart } from '../../server/utils';

//STYLING IMPORTS
import { AppBar, Toolbar, Box, Button, CardMedia, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../../server/public/img/howtheturntablesLOGO.png';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      auth: {},
      admin: false,
    };
  }

  componentDidUpdate() {
    const propAdmin = this.props.auth.admin;
    if (propAdmin && !this.state.admin) {
      this.setState({ admin: true });
    } else if (!propAdmin && this.state.admin) {
      this.setState({ admin: false });
    }
  }

  logout() {
    const history = this.props.history;
    window.localStorage.removeItem('JWTtoken');
    window.localStorage.removeItem('UserCart');
    this.setState({ auth: {}, admin: false });
    newGuestCart();
    history.push('/');
  }

  render() {
    const token = window.localStorage.JWTtoken;
    const admin = this.state.admin;
    return (
      <div>
        <Box component="nav">
          <AppBar position="static" style={{ background: '#F2F1E7', position: 'static' }}>
            <Toolbar
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItem: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardMedia
                    style={{
                      width: 'auto',
                      maxHeight: '80px',
                    }}
                    component="img"
                    image={Logo}
                  />
                </div>
              </Link>
              <h2 style={{ color: '#42240C', fontFamily: 'Special Elite, cursive' }}>Bootleg Records For Your Ear Holes</h2>
              <div style= {{
                minWidth: '300px'
              }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button style={{ color: '#42240C' }}>Home</Button>
                </Link>

                {admin && token ? (
                  <Link to="/admin/orders" style={{ textDecoration: 'none' }}>
                    <Button style={{ color: '#42240C' }}>Admin</Button>
                  </Link>
                ) : (
                  ''
                )}

                {!admin && token ? (
                    <Link to="/user/orders" style={{ textDecoration: 'none' }}>
                      <Button style={{ color: '#42240C' }}>Account</Button>
                    </Link>
                ) : (
                  ''
                )}

                {token ? (
                    <Button
                      onClick={() => this.logout()}
                      style={{ color: '#42240C' }}
                    >
                      Logout
                    </Button>
                ) : (
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button style={{ color: '#42240C' }}>Login</Button>
                  </Link>
                )}

                <Link to="/cart" style={{ textDecoration: 'none' }}>
                  <Button>
                    <ShoppingCart style={{ color: '#42240C' }} />
                  </Button>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
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
