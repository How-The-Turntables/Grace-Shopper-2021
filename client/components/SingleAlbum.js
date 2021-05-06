import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderSingleAlbum } from '../redux/albums/albumActions';
import { renderReviews } from '../redux/reviews/reviewActions';
import { AddReview } from './index';

import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
// import {store} from '../../store';
// import {PRODUCT_DETAILS_URL} from './constants';
// import axios from 'axios';

class SingleAlbum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          review: '',
          showHideReviewForm: false,
        }
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
        const { album } = this.props;
        const { showHideReviewForm } = this.state;
        if (album.error || album.fetching) {
            return (<div><CircularProgress style={{padding: '30%'}} size={80} thickness={10}/></div>);
        } else {
            // this.data = this.props.productDetails.data;
            return (
                <div>
                    <Card>
                        <CardHeader title={album.title} subtitle={album.artist.name}/>
                        <CardMedia
                            overlay={<CardTitle title={album.title} subtitle={album.artist.name} />}>
                            <img src={album.photoUrl} alt=""/>
                        </CardMedia>
                        <CardTitle title={album.title} subtitle={album.artist.name}  />
                        <CardText>{album.description}</CardText>
                        <CardActions>
                            <FlatButton>
                                <Link to={'/albums/0'}>Back to Albums List</Link>
                            </FlatButton>
                            <FlatButton label="Add To Cart" onClick={this.addToCart.bind(this)}/>
                        </CardActions>
                    </Card>
                    {/* <Snackbar
                        open={this.state.snackBarOpen}
                        message="Event added to your calendar"
                        autoHideDuration={3000}
                        onRequestClose={this.handleRequestClose.bind(this)}
                    /> */}
                </div>
            );
        }
    };
  };

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

    export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);

    // addToCart() {
    //     store.dispatch({
    //         type: 'ADD_ITEM_TO_CART',
    //         payload: this.data
    //     });
    //     this.showSnackBar();
    // }

    // showSnackBar() {
    //     this.setState({snackBarOpen: true,});
    // }

    // handleRequestClose() {
    //     this.setState({snackBarOpen: false,});
    // }

//     static getProductDetails(nextState) {
//         store.dispatch({
//             type: 'FETCH_PRODUCT_DETAILS',
//             payload: axios.get(PRODUCT_DETAILS_URL.replace('{{}}', nextState.params.sku))
//         });
//     }




// export default connect(({productDetails}) => ({productDetails}))(ProductDetails);
