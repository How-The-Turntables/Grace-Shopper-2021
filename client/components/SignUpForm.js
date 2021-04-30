import React, { Component } from 'react';
import connect from 'react-redux';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
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
      await this.props.loginUser(this.state);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={ this.onChange }
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={ this.onChange }
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={ this.onChange }
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={ this.onChange }
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return state
// }

// const mapDistpatchToProps = (dispatch, { history }) => {
//   return {
//     user: (user) => dispatch(loginUser(user, history)),
//   };
// };

// export default connect(null, mapDistpatchToProps)(LoginForm);

export default SignUpForm;
