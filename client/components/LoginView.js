import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';


const LoginView = () => {
    return (
      <div>
        <h1>Login View, Bitch</h1>
        <LoginForm />
        <p>
          New user? <Link to="/register">Sign up</Link>
        </p>
      </div>
    );
};

export default LoginView;

