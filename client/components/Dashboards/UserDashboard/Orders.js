// import React, { useEffect} from 'react';
import React, { Component } from 'react';

import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import { connect } from 'react-redux'
import { renderUserOrders } from '../../../redux/user/userActions';

function preventDefault(event) {
  event.preventDefault();
};

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Orders extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem('UserCart'));
    console.log('USER ', user.cart.userId)
    this.props.loadOrders(user.cart.userId);
  }
  render() {
    const { classes, orders } = this.props
  return (
    <React.Fragment>
      <Title>Past Orders</Title>
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
    </React.Fragment>
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

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Orders))
