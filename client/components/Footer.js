import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2" style={{
      color: '#42240C'
    }} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        How the Turntables
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
class Footer extends Component {
  render() {
    return (
      <div style={{
        background: '#F2F1E7',
        paddingBottom: '1rem'
      }}>
        <Box pt={4}>
            <Copyright />
          </Box>
      </div>
    );
  }
}

export default Footer;
