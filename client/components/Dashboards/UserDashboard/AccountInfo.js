import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { renderEditUser, renderSelectedUser } from '../../../redux/user/userActions';
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

class AccountInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.user.firstName ? this.props.user.firstName : '',
      lastName: this.props.user.lastName ? this.props.user.lastName : '',
      email: this.props.user.email ? this.props.user.email : '',
      password: this.props.user.password ? this.props.user.password : '',
      admin: this.props.user.admin ? this.props.user.admin : 'Customer'
    }
  };

  // componentDidMount() {
  //   console.log("ComponentWillMount");
  //   const user = JSON.parse(window.localStorage.getItem('UserCart'));
  //   const id = user.id;
  //   console.log("Will fetch expert with id", id);
  //   this.props.fetchUser(id);
  // };


  componentDidUpdate = (prevProps) => {
    console.log('PROPS ', this.props)
    const user = JSON.parse(window.localStorage.getItem('UserCart'));
    if(!prevProps.user.id && user.id){
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        password: this.props.user.password,
        admin: this.props.user.admin
      })
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('hello')
    try {
      const user = JSON.parse(window.localStorage.getItem('UserCart'));
      await this.props.updateUser(user.id, this.state );
    }
    catch (err) {
      this.setState({ error: err.response.data.error });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { firstName, lastName, email, password } = this.state

    return (
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={ this.handleSubmit }>
        <div>
          <TextField
            required id="standard-required"
            label="Required"
            value={firstName}
            name="firstName"
            onChange={ this.handleChange }
            />
            <TextField
            required id="standard-required"
            label="Required"
            value={lastName}
            name="lastName"
            onChange={ this.handleChange }
            />
            <TextField
            required id="standard-required"
            label="Required"
            value={email}
            name="email"
            onChange={ this.handleChange }
            />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            // defaultValue="NothingToSeeHere"
            value={password}
            onChange={ this.handleChange }
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}>Save
         </Button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  // console.log('ownProps', ownProps)

  // const user = state.auth.users.find(user => user.id === ownProps.match.params.id*1) || {};
    return {
      user: state.auth.user
    }
};


const mapDispatchToProps = (dispatch, { history }) => {
	return {
    // loadSingle: (id) => dispatch( renderSelectedCampus(id) ),
    updateUser: ( id, user ) => dispatch( renderEditUser( id, user, history )),
	}
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(AccountInfo));

