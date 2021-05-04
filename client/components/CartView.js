import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
        <div>{!orderDetail ?
          (<h2>Your cart is empty.</h2>) :
          (<div>
            <ul>
              {/* might need to be object.entries */}
              {orderDetail.albums.map((album) => {
                return (
                  <li key={album.id}>
                    <div>
                      <Link to={{ pathname: `/albums/${album.id}` }}>
                          <h4>{album.title}</h4>
                      </Link>
                      </div>
                    <div>
                      <img src={album.photoUrl}/>
                      <div>
                        <h6>Genre: {album.genre} </h6>
                        <h6>Year: {album.year} </h6>
                      </div>
                      <div>
                        <div>${album.price}</div>
                        <div>
                          <select>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <Link src='/checkout'><h4>Ready to checkout?</h4></Link>

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
