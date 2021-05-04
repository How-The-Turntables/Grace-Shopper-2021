import React from 'react';
import { connect  } from 'react-redux';
import { renderSingleAlbum } from '../redux/albums/albumActions';
import { renderReviews } from '../redux/reviews/reviewActions';
import { AddReview } from './index';


class SingleAlbum extends React.Component{
  constructor() {
    super()
    this.state = {
      review: '',
      showHideReviewForm: false
    }    // this.handleAddToCart = this.handleAddToCart.bind(this)
  };

  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.loadSingle(albumId);
  };

 // handleAddToCart

  showComponent = (review) => {
    if (review === "showHideReviewForm") {
      return this.setState({ showHideReviewForm: !this.state.showHideReviewForm });
      // return break
    }
    return null;
  };

  render() {
    const { album } = this.props;
    const { showHideReviewForm } = this.state;
    return (
      <div >
        <h1>{album.title}</h1>

        {!album.quantity ? (<div>Sorry, this album is out of stock!</div>):
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
                <div>
                  Product Reviews
                    <div>
                      {showHideReviewForm && <AddReview history={this.props.history} id={album.id}/>}
                    </div>
                    <button
                      onClick={() =>  this.showComponent('showHideReviewForm')}>
                        Leave a Review
                      </button>

                      {!album.reviews ? (<div>This album has not been reviewed</div>) :
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
