import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { renderPromoteUser, renderSelectedUser } from '../../../redux/admin/adminActions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
});

class PromoteUser extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     // firstName: this.props.user.firstName ? this.props.user.firstName : '',
  //     // lastName: this.props.user.lastName ? this.props.user.lastName : '',
  //     // email: this.props.user.email ? this.props.user.email : '',
  //     // password: this.props.user.password ? this.props.user.password : '',
  //     admin: this.props.useradmin ? this.props.user.admin : 'Customer'
  //   }
  //   // this.handleSubmit = this.handleSubmit.bind(this);

  // };

  componentDidMount() {
    console.log("ComponentWillMount");
    const user = this.props.match.params.id
    console.log("Will fetch expert with id", user);
    this.props.loadUser(user);
  };


  // componentDidUpdate = (prevProps) => {
  //   // const user = this.props.match.params.id
  //   if(!prevProps.user.id && user.id){
  //     this.setState({
  //     //   firstName: this.props.user.firstName,
  //     //   lastName: this.props.user.lastName,
  //     //   email: this.props.user.email,
  //     //   password: this.props.user.password,
  //       admin: this.props.user.admin
  //     })
  //   }
  // };

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // const user = JSON.parse(window.localStorage.getItem('UserCart'));
  //     // await this.props.updateUser(user.id, this.state );
  //     await this.props.promoteUser(this.props.match.params.id, this.state );

  //   }
  //   catch (err) {
  //     this.setState({ error: err.response.data.error });
  //   }
  // };

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  render() {
    const { classes } = this.props;
    const { admin } = this.state

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
  };
};

{/* <TextField
          required
          id="filled-disabled"
          label="Admin Status"
          value={admin}
          name="admin"
          onChange={ this.handleChange }
          /> */}
        //   <Button
        //     type="submit"
        //     variant="contained"
        //     color="primary"
        //     size="small"
        //     className={classes.button}
        //     startIcon={<SaveIcon />}>Save
        //  </Button>

const mapStateToProps = (state, ownProps) => {
  console.log('STATE ',state )
  // const user = state.users.find(user => user.id === ownProps.match.params.id*1) || {};
  //   return {
  //     user
  //   }
    return {
      // promoteUser: state.promoteUser,
      selectedUser: state.selectedUser
    }
};


const mapDispatchToProps = (dispatch, { history }) => {
	return {
    // promoteUser: ( id, user ) => dispatch( renderPromoteUser( id, user, history )),
    loadUser: ( id ) => dispatch( renderSelectedUser( id, history ))
	}
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(PromoteUser));

