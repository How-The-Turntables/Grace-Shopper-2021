import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderAlbums } from '../redux/albums/thunkCreators';

import {
  Products,
  ProductContainer,
  ProductCard,
  ProductInfo,
  ImageCard,
  ProductFilter,
  SortParent,
  SortChild,
} from '../styles';

class AllAlbums extends React.Component {
  componentDidMount() {
    this.props.load();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.idx !== this.props.match.params.idx) {
      this.props.load();
    }
  }

  render() {
    const { albums, count } = this.props;
    const pageCount = Math.ceil(count / 10); //Math.ceil rounds up
    const links = new Array(pageCount).fill('filler').map((el, idx) => {
      return {
        num: idx + 1,
        idx,
        selected:
          (!this.props.match.params.idx && idx === 0) ||
          this.props.match.params.idx * 1 === idx,
      };
    });
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
                    <ProductCard key={album.id}>
                      <ImageCard src={album.photoUrl} />

                      <ProductInfo>
                        <Link to={{ pathname: `/albums/${album.id}` }}>
                          <h4>Album{album.title}</h4>
                        </Link>
                        <h5>By{album.artist.name}</h5>
                        <h4>Price{album.price}</h4>
                      </ProductInfo>
                      <button>Add to Cart</button>
                    </ProductCard>
                  );
                })}
          </ProductContainer>
        </Products>
        <div>
          <nav>
            {links.map(({ idx, num }) => {
              return (
                <Link key={idx} to={`/albums/${idx}`}>
                  {num}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.albums.count,
    albums: state.albums.data[ownProps.match.params.idx] || [],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => dispatch(renderAlbums(ownProps.match.params.idx || 0)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAlbums);
