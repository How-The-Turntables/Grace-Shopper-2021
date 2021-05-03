import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AllOrders, AllUsers, AllAlbums } from './index';
// import { renderAdmin } from '../redux/admin';


class AdminPage extends Component {
  componentDidMount() {
    // console.log(this.props)
    // this.props.loadAdmin();
  }
  render() {
    return(
      <div>
        <div className='dashboard-panel'>
          <ul>
            <li>
            <Link to={'/orders/admin'}>Manage Orders</Link>
              {/* <AllOrders /> */}
            </li>
            <li>
              <Link to={'/users/admin'}>Manage Registered Users</Link>
              {/* <AllUsers /> */}
            </li>
            <li>
              <Link to={'/albums'}>Manage Products</Link>
              {/* <AllAlbums/> */}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // admin: state.auth,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loadAdmin: () => dispatch(renderAdmin())
  };
};
export default connect( mapStateToProps, mapDispatchToProps )( AdminPage );
