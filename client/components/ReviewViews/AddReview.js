import React from 'react';
import { connect } from 'react-redux';
import { renderAddReview } from '../../redux/reviews/reviewActions';
import { withStyles } from '@material-ui/core/styles';

//STYLES
import { Grid, Select, MenuItem, TextField, Button } from '@material-ui/core';


const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

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
    const { classes } = this.props;

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
          <Grid item xs={12}>
            <TextField
              type="text"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="How was the album?"
              required
            />
          </Grid>
          <Select
            // value={stars}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}>
            <MenuItem value="">
              <em>Rating</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
        </Select>
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
// need to finish functionality

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    addReviewDispatch: (review, id) => dispatch(renderAddReview( review, id, history ))
  }
};

export default withStyles(styles, { withTheme: true })(connect( null, mapDispatchToProps )( AddReview ));
