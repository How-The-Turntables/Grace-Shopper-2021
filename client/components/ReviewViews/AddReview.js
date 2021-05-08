import React from 'react';
import { connect } from 'react-redux';
import { renderAddReview } from '../../redux/reviews/reviewActions';

//STYLES
import { Button } from '@material-ui/core';

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      stars: 5,
      albumId: this.props.id
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.props.addReviewDispatch(this.state, this.props.id);
    }
    catch(error) {
      this.setState({ error: error.response.data.error });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div >
        <form
          onSubmit={ this.handleSubmit } style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
            <br/>
          <label>Comment</label>
          <textarea
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="How was the album?"
            required >
          </textarea>
          <br/>

          {/* <label>Star Rating</label>
          <br/>
          <input
            type="text"
            name="stars"
            value={this.state.stars}
            onChange={this.handleChange}
            placeholder="Please rate between 1 and 5"
            required >
          </input>
          <br/> */}

          <Button type='submit' style={{
            marginBottom: '1rem',
            backgroundColor: '#42240C',
            color: '#F2F1E7'
          }}>
              Add Review
          </Button>
        </form>
      </div>
    )
    }
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    addReviewDispatch: (review, id) => dispatch(renderAddReview( review, id, history ))
  }
};

export default connect( null, mapDispatchToProps )( AddReview );
