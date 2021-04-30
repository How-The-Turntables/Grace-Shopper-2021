import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Products, ProductContainer, ProductInfo, ImageCard } from '../styles';

const AllAlbums = (props) => {
  const albums = props.albums;
  return (
    <div>
      <h1>Shop all albums</h1>
      <Products>
        <ProductContainer>
          {!albums.length
            ? `Sorry, we're out of stock. Check back next week!`
            : albums.map((album) => {
                return (
                  <ProductInfo key={album.id}>
                    <Link to={{ pathname: `/albums/${album.id}` }}>
                      <ImageCard src={album.photoUrl} />
                    </Link>
                    <h4>{album.title}</h4>
                    <h5>{album.artist.name}</h5>
                    <h4>{album.price}</h4>
                  </ProductInfo>
                );
              })}
        </ProductContainer>
      </Products>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStateToProps)(AllAlbums);
