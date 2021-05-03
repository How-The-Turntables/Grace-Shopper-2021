import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderAlbums } from '../redux/albums/thunkCreators';
import FilterSort from './FilterSort';

import {
  Products,
  ProductContainer,
  ProductCard,
  ProductInfo,
  ImageCard,
  ProductFilter
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

              <FilterSort albums={albums} />

        </ProductFilter>
          <ProductContainer>

              {albums.map((album) => {
                  return (
                    <ProductCard key={album.id}>
                      <ImageCard src={album.photoUrl} />

                      <ProductInfo>
                        <Link to={{ pathname: `/albums/${album.id}/details` }}>
                          <h4>{album.title}</h4>
                        </Link>
                        <h5>{album.artist.name}</h5>
                        <h4>{album.price}</h4>
                      </ProductInfo>
                      {/* need to add onclick */}
                      <button>Add to Cart</button>
                    </ProductCard>
                  );
                }
                )}
           </ProductContainer>

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
    albums: state.albums.data[ownProps.match.params.idx] || state.albums.filteredAlbums,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => dispatch(renderAlbums(ownProps.match.params.idx || 0)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAlbums);
