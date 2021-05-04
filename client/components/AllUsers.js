import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { renderUsers } from '../redux/users/adminThunkCreator';

//
class AllUsers extends Component {


};

const mapStateToProps = (state) => {
  return {
    // users: state.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loadUsers: () => dispatch(renderUsers())
  };
};

export default AllUsers;
