import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderAlbums } from '../redux/albums/thunkCreators';

import {
  Products,
  ProductContainer,
  ProductInfo,
  ImageCard,
  ProductFilter,
  SortParent,
  SortChild,
} from '../styles';

class AllAlbums extends React.Component {
  componentDidMount() {
    try {
      this.props.load(this.props);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { albums } = this.props;
    console.log('this.props', albums);
    return (
      <div>
        <h1>Shop all albums</h1>
        <ProductFilter>
          <SortParent>
            <SortChild>
              <label>Filter By</label>
              <select>
                <option value="/">Genre</option>
                <option value="/">Artist</option>
              </select>
            </SortChild>
            <SortChild>
              <label>Sort By</label>
              <select>
                <option value="/">Title</option>
                <option value="/">Price</option>
              </select>
            </SortChild>
          </SortParent>
        </ProductFilter>
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
                      <h4>Album{album.title}</h4>
                      <h5>By{album.artist.name}</h5>
                      <h4>Price{album.price}</h4>
                    </ProductInfo>
                  );
                })}
          </ProductContainer>
        </Products>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(renderAlbums()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAlbums);
