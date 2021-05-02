import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartView extends Component {
  constructor() {
    super();
    this.state = {
      // write if statem to see if our redux already has this info
      userId: '',
      total: 0,
      status: '',
    };
  }
  render() {
    return (
      <div>
        <h1>Cart View Component</h1>
      </div>
    );
  }
}
// bring in the redux
const mapStateToProps = (state) => {
  return {
    user: state.user,
    orderDetail: state.orderDetail,
  };
};

export default connect(mapStateToProps)(CartView);
