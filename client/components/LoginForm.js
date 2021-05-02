import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/user/thunkCreators';

class LoginForm extends Component {
  constructor() {
    super();
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
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return state
// }

const mapDistpatchToProps = (dispatch, { history }) => {
  return {
    login: (credentials) => dispatch(loginUser(credentials, history)),
  };
};

export default connect(null, mapDistpatchToProps)(LoginForm);

// export default LoginForm;
