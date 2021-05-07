
import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux'

//STYLING IMPORTS
import { Grid, Paper, Typography, ButtonBase, withStyles, Box } from '@material-ui/core';
import { Container, TitleBox, Background } from '../styles';
import homeImage from '../../server/public/img/homePage.png';


function preventDefault(event) {
  event.preventDefault();
};

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '100 vw',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
});

class Cart extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem('UserCart'));
    if ( user.id === 'guest')
    this.props.loadOrders(user.id);
  }
  render() {
    const { classes, orders } = this.props
  return (
    <div>
      <Background>
      <Container style={{
        width: '100 vw',
      }}>
      <TitleBox>
    <Typography variant='h2' component='h2' >Today's a great day to give us your money!</Typography>
        </TitleBox>
    </Container>
    </Background>
    <Box style={{
      maxHeight: '100%',
    }}>
    {/* {orders.length ? orders.map((order) => ( */}
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src='https://i.imgur.com/UYThC20.png' />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Album Name Here
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Artist Name Here
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Album Description Here
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$Free.99</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    {/* )) : 'no orders yet'} */}
    </Box>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    orders: state.userOrders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (id) => dispatch(renderUserOrders(id))
  }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Cart))

//OG COMPONENT
{/* <React.Fragment>
<Table size="small">
  <TableHead>
    <TableRow>
      <TableCell>Date</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Payment Method</TableCell>
      <TableCell align="right">Sale Amount</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {orders.length ? orders.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.createdAt}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.paymentMethod}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
      </TableRow>
    )) : 'no orders yet'}
  </TableBody>
</Table>
<div className={classes.seeMore}>
  <Link color="primary" href="#" onClick={preventDefault}>
    See more orders
  </Link>
</div>
</React.Fragment> */}
