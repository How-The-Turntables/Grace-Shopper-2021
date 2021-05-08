import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from "../redux/user/userActions"
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import img from '../../server/public/img/unsplashRecord.png';


class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  };

  onChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.user(this.state);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}>
      <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginTop: '300px',
      }}>
        <form onSubmit={ this.onSubmit }>
        <Grid
            container
            spacing={3}
            style={{
              backgroundColor: '#F2F1E7',
              display: 'flex',
              flexDirection: 'column',
            }}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={3}
              style={{
                display: 'flex',
                marginTop: '10px',
              }}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={ this.onChange }/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={ this.onChange }/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={ this.onChange }/>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={ this.onChange }/>
              </Grid>
              <Grid item xs={12}>
                  <Button type="submit" fullWidth>
                    Register</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDistpatchToProps = (dispatch, { history }) => {
  return {
    user: (user) => dispatch(loginUser(user, history)), // needs to be on a post route
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(SignUpForm);

// export default SignUpForm;
