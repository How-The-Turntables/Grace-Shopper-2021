import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderSingleAlbum } from '../redux/albums/albumActions';
import { renderReviews } from '../redux/reviews/reviewActions';
import { AddReview } from './index';
import Reviews from './ReviewViews/Reviews';

//STYLES
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';

const styles =(theme)=>({
  media: {
    height: 275,
  },
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
                {/* <CardHeader title={album.title} subtitle={album.artist.name} /> */}
                {/* <CardMedia
                  overlay={
                    <CardTitle
                      title={( album.title)}
                      subtitle={( album.artist.name)}
                    />
                  }
                ></CardMedia> */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#a12222'
                }}>
                  <img src={album.photoUrl} style={{
                  width: '265px',
                  height: '250px'
                }}/>
                <Typography variant='h3' style={{
                  color: '#F2F1E7',
                  fontFamily: 'Special Elite, cursive',
                  padding: '0.5rem',
                }}>
                {album.title}
                </Typography>
                <Typography variant='h5' style={{
                  color: '#F2F1E7',
                  fontFamily: 'Special Elite, cursive',
                }}>
                {album.artist.name}
                </Typography>
                <CardText style={{
                  color: '#F2F1E7'
                }}>{album.description}</CardText>
                <CardActions>
                  <Button style={{
                    backgroundColor: '#42240C'
                  }}>
                    <Link to={'/albums/0'} style={{
                    textDecoration: 'none',
                    color: '#F2F1E7'
                  }}
                  >Back to Albums List</Link>
                  </Button>
                  <Button style={{
                    textDecoration: 'none',
                    backgroundColor: '#42240C'
                  }}
                  >
                    <Link to={'#'} style={{
                    textDecoration: 'none',
                    color: '#F2F1E7'
                  }}
                  >
                    Add To Cart
                    </Link>
                  </Button>
                  {/* onClick={this.addToCart.bind(this)} */}
                </CardActions>
                </div>
                <MuiThemeProvider>
                  <Card style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#F2F1E7'
                  }}>
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
