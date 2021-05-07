import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/user/userActions';
import { ToastContainer, toast, Zoom } from 'react-toastify';

//STYLING IMPORTS
import { Grid, Paper, TextField, Button } from '@material-ui/core';

toast.configure();

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.login(this.state);
      toast.error('Hello!', {
        transition: Zoom,
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error.response.data);
      toast.error('Wrong credentials! >:(');
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginTop: '300px',
        }}
      >
        <form onSubmit={this.onSubmit}>
          <Grid
            container
            spacing={3}
            style={{
              backgroundColor: '#F2F1E7',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid item xs={12}>
              <Grid
                container
                spacing={3}
                style={{
                  display: 'flex',
                  marginTop: '10px',
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.onChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.onChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" fullWidth>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state };
};

const mapDistpatchToProps = (dispatch, { history }) => {
  return {
    login: (credentials) => dispatch(loginUser(credentials, history)),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(LoginForm);

// export default LoginForm;
