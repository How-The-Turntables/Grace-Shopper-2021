import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderOrders } from '../redux/admin/adminActions';


class AllOrders extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.loadOrders();
  }
  render() {
    const { orders } = this.props;
    return(
      <div>
        <h1>All Orders Component</h1>
          {!orders.length ? "You're gonna go out of business soon.": orders.map((order) => {
            return (
            <div key={order.id}>{
              <h4>
                Customer Name: {order.user.firstName} {order.user.lastName}
                <br/>
                Customer Email: {order.user.email}
                <br/>
                Order Id: {order.id}
                <br/>
                Order Status: {order.status}
                <br/>
                Order Products:
                <ol>{
                  order.albums.map((album) => {
                    return (
                    <li key={album.id}>{album.title}</li>
                    )
                  })
                }</ol>
              </h4>
            }</div>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(renderOrders())
  };
};
export default connect( mapStateToProps, mapDispatchToProps )( AllOrders );
