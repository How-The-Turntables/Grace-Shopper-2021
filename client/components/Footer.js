import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
      <div>
        <Box pt={4}>
            <Copyright />
          </Box>
      </div>
    );
  }
}

export default Footer;
