import React, { Component } from 'react';
import { connect } from 'react-redux';
// cartView we have order_items and order_details that we may need
// order_details we want status to in IN PROGESS

// order-items has on it order_detail.id, quantity and album_id

class CartView extends Component {
  constructor() {
    super();
    this.state = {
      // write if statem to see if our redux already has this info
      userId: '',
      total: 0,
      status: 'IN PROGRESS',
    };
  }
  render() {
    const { orderDetail } = this.props;
    console.log(orderDetail)
    return (
      <div>
        <div>{!orderDetail.length ?
          (<h2>Your cart is empty.</h2>) :
          (<div>
            </div>)
        }
        </div>
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
