import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//STYLING IMPORTS
import img from '/Users/kgil/Grace-Shopper-2021/server/public/img/unsplashRecord.png';
//import Calligraffitti from '../../server/public/fonts/Calligraffitti-Regular.ttf'; -- Working on figuring out changing the web font;
//import avatar from '../../server/public/img/defaultAlbum.png';


const LoginView = (props) => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100 vw',
      }}>
        {/* <p>
          New user? <Link to="/register">Sign up</Link>
        </p> */}
        <LoginForm history={ props.history }/>
      </div>
    );
};

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(LoginView);

