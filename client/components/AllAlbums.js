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
      this.props.load();
    } catch (err) {
      console.log(err);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.index !== this.props.match.params.index) {
      this.props.load();
    }
  }
  render() {
    const { albums, count } = this.props;
    const pageCount = Math.ceil(count / 10); //Math.ceil rounds up
    const links = new Array(pageCount).fill('filler').map((el, idx) => {
      return {
        text: idx + 1,
        idx,
        selected:
          (!this.props.match.params.idx && idx === 0) ||
          this.props.match.params.idx * 1 === idx,
      };
    });
    console.log('links ', links);

    // console.log('this.props', typeof albums);
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
        <div>
          <nav role="navigation" aria-lable="pagination">
            <button
            // className="page-prev"
            // onClick={() => {
            //   this.previousPage();
            // }}
            >
              Previous
            </button>
            <button
            // className="page-next"
            // onClick={() => {
            //   this.nextPage();
            // }}
            >
              Next
            </button>
            <ul className="page-list">
              {[...Array(this.props.state.filteredPages)].map((val, idx) => (
                <button
                  key={idx}
                  className={`button pagination-link ${
                    this.props.state.currentPage === idx + 1 ? 'is-current' : ''
                  }}`}
                  aria-label="Page 1"
                  onClick={() => this.goToPage(idx + 1)}
                  aria-lable="page"
                >
                  {idx + 1}
                </button>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, albumsProps) => {
  console.log('state.albums.data', state.albums.data); // tutorial shows with .data but that returned undefined.
  return {
    count: state.albums.count,
    albums: state.albums.data[albumsProps.match.params.index] || [],
  };
};

const mapDispatchToProps = (dispatch, albumsProps) => {
  return {
    load: () => dispatch(renderAlbums(albumsProps.match.params.index || 0)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAlbums);
