import React, { Component } from 'react';

class SingleArtist extends Component {
  // not addind local state until we know if we will be adding edit, create or delete functionality
  componentDidMount() {
    const id = this.props.match.id;
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h1>hello this is single artist view for artist id: </h1>
      </div>
    );
  }
}

export default SingleArtist;
