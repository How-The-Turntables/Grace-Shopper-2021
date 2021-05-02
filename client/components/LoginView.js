import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const LoginView = (props) => {
    return (
      <div>
        <h1>Login View, Bitch</h1>
        <LoginForm history={ props.history }/>
        <p>
          New user? <Link to="/register">Sign up</Link>
        </p>
      </div>
    );
};

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(LoginView);

