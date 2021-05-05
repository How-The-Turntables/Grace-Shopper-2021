import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newGuestCart } from '../../server/utils';

//STYLING IMPORTS
import { AppBar, Toolbar, Box, Button, CardMedia } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//import Calligraffitti from '../../server/public/fonts/Calligraffitti-Regular.ttf'; -- Working on figuring out changing the web font;
import Logo from '../../server/public/img/howtheturntablesLOGO.png';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      auth: {},
    };
  }

  logout() {
    window.localStorage.removeItem('JWTtoken');
    window.localStorage.removeItem('UserCart');
    this.setState({ auth: {} });
    newGuestCart();
  }

  render() {
    return (
      <div>
        <Box component="nav">
          <AppBar position="static" style={{ background: '#F2F1E7' }}>
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
              <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button style={{ color: '#42240C' }}>Home</Button>
                </Link>

                {window.localStorage.JWTtoken ? (
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
