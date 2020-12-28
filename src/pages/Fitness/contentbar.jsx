import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PlaceCard from '../../components/placeCard';
import Footer from '../../components/footer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
      by Qonfu S.P.C All Rights Reserved
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({

  sliderTitle: {
    color: 'white',
    marginLeft: '8%',
  },

  sliderDiv: {
    left: '10%',
    top: '25%',
    position: 'absolute',
  },

  sliderDiv1: {
    left: '10%',
    top: '18%',
    position: 'absolute',
  },

  sliderContent: {
    color: 'white',
    marginLeft: '8%',
    width: '42%',
  },

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    height: '400px',
    padding: theme.spacing(8, 0, 6),
    backgroundImage: 'url("place.png")',
    backgroundRepeat: "no-repeat",
    width: '100%',
    filter: 'blur(8px)',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  topButtons: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  cardGrid1: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: '80%',
  },

  cardContent: {
    flexGrow: 1,
  },

  copyright: {
    padding: theme.spacing(6),
  },
  bar: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 4,
    width: 300,
  },
  divider: {
    height: 2,
    marginTop: 20,
    width: '100%'
  },

  root: {
    flexGrow: 1,
  },

  image: {
    width: 300,
    height: 300,

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  open: {
    color: '#54b948',
  },
  star: {
    color: 'white',
  },
  search: {
    padding: '2px 4px',
    display: 'inline-block',
    alignItems: 'center',
    width: '70%',
    marginRight: '20px',
    borderRadius: '24px',
  },
  searchdivider: {
    height: 28,
    margin: 4,
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.topButtons}>
      </div>

      <main className={classes.main}>
        <div className={classes.heroContent}>

        </div>
        <div className={classes.sliderDiv}>
          <Typography variant="h1" className={classes.sliderTitle}>
            Fitness
            </Typography>


          <Typography className={classes.sliderContent} align="left" marginTop="20px">
            Lorem ipsum dolor sit amen consecteur lipzig.Lorem ipsum dolor sit amen consecteur lipzig. Lorem ipsum dolor sit amen consecteur lipzig.Lorem ipsum dolor sit amen consecteur lipzig.
            </Typography>
        </div>
        <div className={classes.sliderDiv1}>
          <Fab color="primary" aria-label="add" className={classes.margin}>
            <BorderAllIcon />
          </Fab>
          <br></br>
          <Fab color="inherit" aria-label="add" className={classes.margin}>
            <PermIdentityIcon color="textSecondary" />
          </Fab>
        </div>
        <Container className={classes.cardGrid1}>
          <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
            <b>Nearby Sports Places</b>
          </Typography>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>

            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />

              </Grid>
            ))}
          </Grid>
        </Container>


        <Container className={classes.cardGrid1}>
          <Typography variant="h4" className={classes.title}>
            Nearby Sports Places
          </Typography>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />

              </Grid>

            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />

              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />

              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />

              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer/>





      <Divider className={classes.divider} orientation="horizontal" />
      <copyright className={classes.copyright}>
        <Copyright />
      </copyright>
    </React.Fragment>
  );
}