
import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux'

//STYLING IMPORTS
import { Grid, Paper, Typography, ButtonBase, withStyles, Box } from '@material-ui/core';
import { Container, TitleBox, Background } from '../styles';


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
      height: '100vh',
      width: '100 vw',
    }}>
    {orders.length ? orders.map((order) => (
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
                  { order.albums[0].title }
                </Typography>
                <Typography variant="body2" gutterBottom>
                  { console.log(order) }
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  { order.albums[0].description }
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{ order.albums[0].price }</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )) : 'no orders yet'}
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
