// import React, { useEffect} from 'react';
import React, { Component} from 'react';

import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { connect } from 'react-redux'
import { renderOrders } from '../../redux/admin/adminActions';

function preventDefault(event) {
  event.preventDefault();
}

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


class Orders extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadOrders()
  }
  render() {
    const { classes, orders } = this.props
    console.log('Orders ', orders)
const rows = []
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length ? orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.user.firstName} {row.user.lastName}</TableCell>
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
    orders: state.orders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(renderOrders())
  }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Orders))
