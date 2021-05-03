import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Calligraffitti from '../../server/public/fonts/Calligraffitti-Regular.ttf'; -- Working on figuring out changing the web font;
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Apps, Home, ContactMail } from '@material-ui/icons';
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
          <Toolbar>
        <Typography variant='h3' style={{ color: '#42240C' }}>How The Turntables</Typography>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
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
