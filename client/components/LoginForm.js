import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/user/userActions';

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
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
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
