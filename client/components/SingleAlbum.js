import React from 'react';
import { connect  } from 'react-redux';
import { renderSingleAlbum } from '../redux/albums/thunkCreators';


class SingleAlbum extends React.Component{
  constructor() {
    super()
    // this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount() {
    console.log('comp did mount',this.props)
      this.props.loadSingle(this.props.match.params.id)
  }

 // handleAddToCart


  render() {
    const { album } = this.props;
    console.log('hey albums', album)

  return (
    <div >
      {console.log('hola', album)}
      <h1>heyyyyyy album!</h1>
      {/* {!Object.entries(album).length ? (<div>this is loading</div>) :
        (
          <div key={album.id}>
              <img src={album.photoUrl}/>

              <div className='info'>
                <h3> {album.name} </h3>
                <div> {album.artist.name} </div>
                <div> {album.year} </div>
                <p> {album.description} </p>
                <div> {album.price} </div>
              </div>


              {!album.reviews.length ? (<div>This album has not been reviewed</div>) :
              (<div>
                Reviews:
                {album.reviews.map((review) => {
                  <div key={review.id}>
                    {review.description}
                    {review.stars}
                  </div>
                })}
              </div>
              )}
          </div>
        )
      } */}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    album: state.singleAlbum
  }
};

const mapDispatchToProps = (dispatch) => {
	return {
    loadSingle: (id) => dispatch( renderSingleAlbum(id) ),
    // add to cart
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
