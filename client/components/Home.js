import React from 'react';
//import { Title, Container, Box, Background, Record } from '../styles'; //these are styled containers from /client/styles.js
import { Container, Button, Typography, CardContent, makeStyles, Card, CardActionArea, CardMedia, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import homeImage from '../../server/public/img/homePage.png';
import cardOneImage from '../../server/public/img/Card1.png';
import cardTwoImage from '../../server/public/img/Card2.png';
// import { connect } from 'react-redux'

// IDEA: should we keep index in state, and use that for the browse by albums link? that way it keeps your place...? is that stored in count on the state?
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${homeImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100 vw',
    }}>
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5%',
      }}>
      <Container style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '110px',
        width: '80%',
      }}>
        <Link to="/albums/0" style={{
          textDecoration: 'none',
        }}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= { cardOneImage }
          title="Row of Albums"
        />
        <CardContent style={{
          backgroundColor: '#F2F1E7'
        }}>
          <Typography gutterBottom variant="h5" component="h2">
            Browse By Albums
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Do you like bootleg albums? So do we! Take your pick.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    <Link to="/artists" style={{
          textDecoration: 'none',
        }}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ cardTwoImage }
          title="Contemplative Pianist"
        />
        <CardContent style={{
          backgroundColor: '#F2F1E7'
        }}>
          <Typography gutterBottom variant="h5" component="h2">
            Browse By Artists
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            All of your favorite artists from Duo Lipo to Wild Impala.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </Container>
        {/* <Record>
          <img src="/public/img/defaultAlbum.png" />
        </Record> */}
      </Container>
    </div>
  </div>
  );
};
