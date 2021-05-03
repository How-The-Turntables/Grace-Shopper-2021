import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Calligraffitti from '../../server/public/fonts/Calligraffitti-Regular.ttf'; -- Working on figuring out changing the web font;
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { Home, VpnKey, ShoppingCart } from '@material-ui/icons';
//import avatar from '../../server/public/img/defaultAlbum.png';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      auth: {},
    };
  }

  // logout() {
  //   window.localStorage.removeItem('token');
  //   this.setState({ auth: {}});
  // }

  render() {
    return (
      <div>
      <Box component='nav'>
        <AppBar position='static' style={{ background:'#F2F1E7'
 }}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant='h3' style={{ color: '#42240C' }}>How The Turntables</Typography>
          </Link>
            <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button >
                  <Home style={{ color: '#42240C' }} />Home
                </Button>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button>
                  <VpnKey />Login
                </Button>
              </Link>
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <Button>
                  <ShoppingCart />
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
