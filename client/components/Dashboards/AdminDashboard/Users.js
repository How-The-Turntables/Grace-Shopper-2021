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
import { renderUsers } from '../../../redux/admin/adminActions';

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


class Users extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadUsers()
  }
  render() {
    const { classes, users } = this.props
    // console.log(users[0].admin)
  return (
    <React.Fragment>
      <Title>Registered Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Admin Status</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Registration Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length ? users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{!user.admin? 'Customer' : 'Admin'}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
            </TableRow>
          )) : 'no users yet'}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(renderUsers())
  }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Users))
