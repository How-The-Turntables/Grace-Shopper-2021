import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderArtists } from '../redux/artists/artistThunkCreator';

import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography, Container, CardActionArea } from '@material-ui/core';
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
});


class AllArtists extends Component {
  componentDidMount() {
    this.props.loadArtists();
  }
  render() {
    const { artists, classes } = this.props;
    return (
        <React.Fragment>
      <CssBaseline />
      <main style={{
        background: '#F2F1E7',
      }}>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{
          background: '#42240C'
        }}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" style={{
              color: '#F2F1E7',
              fontFamily: 'Special Elite, cursive'
            }} gutterBottom>
              Artists
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
            {artists.map((artist) => (
              <Grid item key={artist.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {artist.photoUrl}
                    title="Album Artwork"
                  />
                  </CardActionArea> */}
                  <CardContent className={classes.cardContent} style={{
                    background: '#a12222',
                  }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{
                      color: '#F2F1E7',
                      display: 'flex',
                      justifyContent: 'center',
                      fontFamily: 'Special Elite, cursive',
                    }}>
                      {artist.name}
                    </Typography>
                    <Typography style={{
                      color: '#F2F1E7',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                      {artist.description}
                    </Typography>
                  </CardContent>
                  <CardActions style={{
                    background: '#a12222',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    paddingBottom: '1rem',
                  }}>
                  <Link to={`/artists/${artist.id}`} style={{
                    textDecoration: 'none',
                  }}>
                    <Button size="small" color="primary" style={{
                      color: '#F2F1E7',
                      background: '#42240C'
                    }}>
                      View
                    </Button>
                    </Link>
                    {/* <Button size="small" color="primary" style={{
                      color: '#F2F1E7',
                      background: '#42240C'
                    }}>
                      Add To Cart
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    artists: state.artists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtists: () => dispatch(renderArtists())
  };
};

export default withStyles(styles, { withTheme: true })(connect( mapStateToProps, mapDispatchToProps )( AllArtists ));
