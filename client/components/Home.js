import React from 'react';
import { Link } from 'react-router-dom';

//STYLES
import { Container, Typography, CardContent, makeStyles, Card, CardActionArea, CardMedia, CardActions } from '@material-ui/core';
import homeImage from '../../server/public/img/homePage.png';
import cardOneImage from '../../server/public/img/Card1.png';
import cardTwoImage from '../../server/public/img/Card2.png';

// IDEA: should we keep index in state, and use that for the browse by albums link? that way it keeps your place...? is that stored in count on the state?
const useStyles = makeStyles({
  root: {
    maxWidth: 375,
  },
  media: {
    height: 275,
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
        justifyContent: 'space-between',
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
          backgroundColor: '#F2F1E7',
        }}>
          <Typography gutterBottom variant='h5' component='h2' style={{
            color: '#42240C',
            fontFamily: 'Special Elite, cursive'
          }}>
            Browse By Albums
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{
            color: '#42240C',
          }}>
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
          <Typography gutterBottom variant="h5" component="h2" style={{
            color: '#42240C',
            fontFamily: 'Special Elite, cursive'
          }}>
            Browse By Artists
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{
            color: '#42240C',
          }}>
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
