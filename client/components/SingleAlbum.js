import React from 'react';
import { connect  } from 'react-redux';
import { renderSingleAlbum } from '../redux/albums/thunkCreators';


class SingleAlbum extends React.Component{
  // constructor(props) {
  //   super(props)
  //   // this.handleAddToCart = this.handleAddToCart.bind(this)
  // }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadSingle(id);
  }

 // handleAddToCart


  render() {
    const { album } = this.props;

  return (
    <div >
      <h1>{album.title}</h1>

      {!album.quantity ? (<div>Sorry, this album is out of stock!</div>) :
        (
          <div key={album.id}>
              <img src={album.photoUrl}/>
              <div >
                <div> {album.artist.name} </div>
                <div> {album.year} </div>
                <p> {album.description} </p>
                <div> ${album.price} </div>
              </div>
              {/*add to cart button and quantity select*/}
              <select>
                <option></option>
              </select>
              <button>Add to Cart</button>
              {/* have a reviews component that opens upon click */}
              <div>
              Product Reviews
                {!album.reviews.length ? (<div>This album has not been reviewed</div>) :
                (<div>
                  {album.reviews.map((review) => {
                    <div key={review.id}>
                      {review.description}
                      {review.stars}
                    </div>
                  })}
                </div>
                )}
              </div>
          </div>
        )
      }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    album: state.singleAlbum,
  }
};

const mapDispatchToProps = (dispatch) => {
	return {
    loadSingle: (id) => dispatch( renderSingleAlbum(id) ),
    // add to cart
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
