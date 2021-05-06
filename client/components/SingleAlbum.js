import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderSingleAlbum } from '../redux/albums/albumActions';
import { renderReviews } from '../redux/reviews/reviewActions';
import { AddReview } from './index';
import Reviews from './ReviewViews/Reviews';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
// import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles =(theme)=>({

})

class SingleAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      review: '',
      showHideReviewForm: false,
    }; // this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.loadSingle(albumId);
  }

  // handleAddToCart

  showComponent = (review) => {
    if (review === 'showHideReviewForm') {
      return this.setState({
        showHideReviewForm: !this.state.showHideReviewForm,
      });
      // return break
    }
    return null;
  };

  render() {
    const { album, classes } = this.props;
    const { showHideReviewForm } = this.state;
    return (
      <div>
        <MuiThemeProvider>
          <Card>
            {!album.quantity ? (
              <div>Sorry, this album is out of stock!</div>
            ) : (
              <div key={album.id}>
                <CardHeader title={album.title} subtitle={album.artist.name} />
                {/* <CardMedia
                  overlay={
                    <CardTitle
                      title={( album.title)}
                      subtitle={( album.artist.name)}
                    />
                  }
                ></CardMedia> */}
                <img src={album.photoUrl} />
                <CardTitle title={album.title} subtitle={album.artist.name} />
                <CardText>{album.description}</CardText>
                <CardActions>
                  <FlatButton>
                    <Link to={'/albums/0'}>Back to Albums List</Link>
                  </FlatButton>
                  <FlatButton
                    label="Add To Cart"
                    // onClick={this.addToCart.bind(this)}
                  />
                </CardActions>
                <MuiThemeProvider>
                  <Card>
                    <Reviews reviews={album.reviews}/>
                  </Card>
                </MuiThemeProvider>

              </div>
            )}
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    album: state.singleAlbum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingle: (id) => dispatch(renderSingleAlbum(id)),
    // add to cart
  };
};

export default withStyles(styles, {withTheme:true})(connect(mapStateToProps, mapDispatchToProps)(SingleAlbum));


{/* <div>
                  <div> {album.artist.name} </div>
                  <div> {album.year} </div>
                  <p> {album.description} </p>
                  <div> ${album.price} </div>
                </div> */}
                {/*add to cart button and quantity select*/}
                {/* <select>
                  <option></option>
                </select>
                <button>Add to Cart</button>
                <div>
                  Product Reviews
                  <div>
                    {showHideReviewForm && (
                      <AddReview history={this.props.history} id={album.id} />
                    )}
                  </div>
                  <button
                    onClick={() => this.showComponent('showHideReviewForm')}
                  >
                    Leave a Review
                  </button>
                  {!album.reviews ? (
                    <div>This album has not been reviewed</div>
                  ) : (
                    <div>
                      {album.reviews.map((review) => {
                        <div key={review.id}>
                          {review.description}
                          {review.stars}
                        </div>;
                      })}
                    </div>
                  )} */}
                {/* </div> */}
