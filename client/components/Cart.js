
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { cartChecker } from '../redux/shopping/shoppingActions';
import { Link } from 'react-router-dom';


//STYLING IMPORTS
import { Grid, Button, Paper, Typography, ButtonBase, withStyles, Box, Container } from '@material-ui/core';
//import { Container, TitleBox, Background } from '../styles';


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
    this.state = {
      orderItems: [],
      albums: []
    }
  }

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem('UserCart'));
    const token = window.localStorage.getItem('JWTtoken');
    if(!this.props.orderItems) {
      this.props.loadOrders(token, user.cart.userId);
    }
    this.setState({
      orderItems: this.props.orderItems,
      albums: this.props.albums,
    });
  }
  componentDidUpdate(prevProps) {
  if(!prevProps.orderItems && this.props.orderItems) {
    this.setState({
      orderItems: this.props.orderItems,
      albums: this.props.albums
    });
}

  }
  render() {
    const { classes } = this.props;
    const { orderItems, albums } = this.state;
    const orders = orderItems;
  return (
    <div>
      <div style={{
        width: '100 vw',
        backgroundColor: '#42240C',
        display: 'flex',
        justifyContent: 'center',
      }}>
    <Typography variant='h2' component='h2' style={{
      color: '#F2F1E7',
    }}>
      Today's a great day to give us your money!</Typography>
    </div>
    <Box style={{
      height: '100vh',
      width: '100 vw',
    }}>
    {orders.length ? orders.map((order) => {
      const album = albums.filter((album) => album.id === order.albumId)
      console.log('ORDER', order)
      console.log('ALBUM', album);
      return (
        <div className={classes.root}>
      <Paper className={classes.paper} style={{
        backgroundColor: '#F1F2E7',

      }}>
        <Grid container spacing={2} style={{

        }}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src='https://i.imgur.com/UYThC20.png' />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  { album[0].title }
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  { album[0].description }
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{ album[0].price }</Typography>
            </Grid>
          </Grid>
        </Grid>

      </Paper>
    </div>
    )}) : 'no orders yet'}
    <div>
      <Link to="/checkout">
        <Button
          size="small"
          color="primary"
          style={{
          color: '#F2F1E7',
          background: '#42240C',
          }}>
          Ready to Checkout
        </Button>
      </Link>
    </div>
    </Box>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    orderItems: state.cart.orderItems,
    albums: state.cart.cart.albums
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (token, id) => dispatch(cartChecker(token, id))
  }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Cart))
