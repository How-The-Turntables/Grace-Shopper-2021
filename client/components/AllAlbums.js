import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderAlbums } from '../redux/albums/albumActions';
//import FilterSort from './FilterSort';

import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography, Container, CardActionArea } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: 'F2F1E7',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  }
});

class AllAlbums extends Component {
  constructor(props){
    super(props);
    this.props.load();
  };
  componentDidMount(){
    this.props.load();
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.idx !== this.props.match.params.idx) {
      this.props.load();
    }
  }

  render() {
    const { classes, albums, count } = this.props;
    const pageCount = Math.ceil(count / 10); //Math.ceil rounds up
    const links = new Array(pageCount).fill('filler').map((el, idx) => {
      return {
        num: idx + 1,
        idx,
        selected:
          (!this.props.match.params.idx && idx === 0) ||
          this.props.match.params.idx * 1 === idx,
      };
    });
    return (
    <React.Fragment>
      <CssBaseline />
      <main style={{
        background: '#F2F1E7',
      }}>
        {/* Hero unit */}
        <div className={classes.heroContent} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Albums
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md" style={{
            background: '#F2F1E7',
          }}>
          <Grid container spacing={4} >
            {albums.map((album) => (
              <Grid item key={album.id} xs={12} sm={6} md={4}>
                <Link to={`/albums/${album.id}/details`}>
                <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {album.photoUrl}
                    title="Album Artwork"
                  />
                  </CardActionArea>
                  <CardContent className={classes.cardContent} style={{
                    background: '#C81912',
                  }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{
                      color: '#F2F1E7'
                    }}>
                      {album.title}
                    </Typography>
                    <Typography>
                      {album.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <div className={classes.root}>
      <Pagination count={10} shape="rounded" />
      {links.map(({ idx, num }) => {
              return (
                <Link key={idx} to={`/albums/${idx}`}>
                  {num}
                </Link>
              );
            })}
            </div>
    </React.Fragment>
  );
 };
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.albums.count,
    albums: state.albums.data[ownProps.match.params.idx] || state.albums.filteredAlbums,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => dispatch(renderAlbums(ownProps.match.params.idx || 0)),
  };
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(AllAlbums));
