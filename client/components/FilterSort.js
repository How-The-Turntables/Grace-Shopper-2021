import React from 'react';
import { connect  } from 'react-redux';
import { filterTutorial } from '../redux/albums/albumActions';

import {
  ProductFilter,
  SortParent,
  SortChild,
} from '../styles';

class FilterSort extends React.Component {

  render() {
    const { albums } = this.props;
    console.log('hey albums', albums)
    return (
      <div>
        <h1>Shop all albums</h1>
        <ProductFilter>
          <SortParent>
            <SortChild>
              <label>Filter By Genre</label>
              <select
                value={ albums.genre }
                onChange={ (ev) => albums.filterGenre(albums, ev.target.value) }>
                  <option value="/">Rock</option>
                  <option value="/">Pop</option>
                  <option value="/">Jazz</option>
                  <option value="/">Metal</option>
                  <option value="/">Other</option>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.albums.genre,
    albums: state.albums,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterGenre: (albums, genre) => dispatch(filterTutorial(albums, genre)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
