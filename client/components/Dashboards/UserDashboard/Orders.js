import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderUserOrders } from '../../../redux/user/userActions';

//STYLING
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Orders extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem('UserCart'));
    this.props.loadOrders(user.cart.userId);
  }
  render() {
    const { classes, orders } = this.props;
    return (
      <div style={{
        backgroundColor: '#F2F1E7'
      }}>
        <React.Fragment>
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
              {orders.length
                ? orders.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.createdAt}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                    </TableRow>
                  ))
                : 'no orders yet'}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            {/* <Link color="primary" href="#" onClick={preventDefault}>
              See more orders
            </Link> */}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.userOrders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (id) => dispatch(renderUserOrders(id)),
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Orders)
);
