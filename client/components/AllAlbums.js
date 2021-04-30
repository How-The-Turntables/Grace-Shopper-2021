import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AllAlbums = (props) => {
  const albums = props.albums;
  return (
    <div>
      <h1>All Albums Component</h1>
      <div>
        {!albums.length
          ? `Sorry, we're out of stock. Check back next week!`
          : albums.map((album) => {
              return (
                <div key={album.id}>
                  <Link to={{ pathname: `/albums/${album.id}` }}>
                    {album.title}
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStateToProps)(AllAlbums);
