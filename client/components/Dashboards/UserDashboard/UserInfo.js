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

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.user.firstName ? this.props.user.firstName : '',
      lastName: this.props.user.lastName ? this.props.user.lastName : '',
      email: this.props.user.email ? this.props.user.email : '',
      password: this.props.user.password ? this.props.user.password : '',
      admin: this.props.user.admin ? this.props.user.admin : 'Customer'
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  componentDidUpdate = (prevProps) => {
    if(!prevProps.user.id && this.props.user.id){
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        password: this.props.user.password,
        admin: this.props.user.admin
      })
    }
  };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const { id }= this.props.user;
      await this.props.updateUser(id, this.state );
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
    console.log('props ', this.props)
    console.log('state ', this.state)

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
            label="First Name"
            value={firstName}
            name="firstName"
            onChange={ this.handleChange }
            />
            <TextField
            required id="standard-required"
            label="Last Name"
            value={lastName}
            name="lastName"
            onChange={ this.handleChange }
            />
            <TextField
            required id="standard-required"
            label="Email"
            value={email}
            name="email"
            onChange={ this.handleChange }
            />
          <TextField
            required id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={ this.handleChange }
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            style={{
              background: '#42240C'
            }}
            >Save
         </Button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
};


const mapDispatchToProps = (dispatch, { history }) => {
	return {
    updateUser: ( id, user ) => dispatch( renderEditUser( id, user, history )),
	}
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(UserInfo));

