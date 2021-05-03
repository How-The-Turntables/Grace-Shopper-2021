import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AllOrders extends Component {
  componentDidMount() {
    //this.props.load();
  }
  render() {
    return(
      <div>
        <ul>
        </ul>
      </div>
    )
  }
}

export default connect(null, null)(AllOrders);
