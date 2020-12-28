import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaceCard from '../../components/placeCard';
import UserCard from '../../components/userCard';
import NavCard from '../../components/navCard';
import Footer from '../../components/footer';
import MobileTopbar from '../../components/mobiletopbar';
import './style.css';
import {Link} from 'react-router-dom';


//import Places from '../Places/main';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    height: '700px',
    padding: theme.spacing(8, 0, 6),
    backgroundImage: 'url("Image 1.png")',
    backgroundRepeat: "no-repeat",
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
    maxWidth: '100 %',
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
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 2,
    marginTop: 20,
    width: '100%'
  },

  root: {
    flexGrow: 1,
  },



  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },

  paper1: {
    height: "600px",
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    backgroundColor: '#f8fcff',
  },


  leftgrid: {
    marginLeft: '15%',
    marginTop: '80px',
  },

  leftgrid1: {
    marginLeft: '10%',
    width: '5%',
  },

  rightgrid: {
    marginLeft: '10%',
    marginTop: '80px',
  },

  rightgrid1: {
    marginLeft: '10%',
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
  logo: {
    left: '8%',
    position: 'absolute',
  },

  grid: {
    width: '20%',
  }, 
  link:{
    fontSize: '20px',
  }
}));

const cards = [1, 2, 3];

const navcards=[1,2,3,4,5];





export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.topButtons}>
        <Grid container spacing={2} justify="flex-end">
          <img src="Layer 2.svg" alt="logo" className={classes.logo} />
          <Grid item>
            <Link href="#" variant="h6" className={classes.link}>
              <b>Explore</b>
            </Link>
          </Grid>
          <Grid item>
            <Link to = "/place" variant="h6" className={classes.link} color="textSecondary">
              Places
                  </Link>
            {/* <Route path="/places" exact component={Places} /> */}
          </Grid>
          <Grid item>
            <Link href="#" variant="h6" className={classes.link} color="textSecondary">
              Specialists
                  </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="h6" className={classes.link} color="textSecondary">
              Maps
            </Link>
          </Grid>
          <Grid item>
            <Link to ='/login' variant="h6" className={classes.link}>
              <b>Login or Signup</b><ExpandMoreIcon />
            </Link>
          </Grid>

        </Grid>
      </div>
      <div id="mobiletopbar">
      <MobileTopbar/>
      </div><br></br><br></br>
      <div id='abc'>
      <Container className={classes.cardGrid1}>
      <Typography  variant="h4" fontFamily="Roboto" align="center" color="textSecondary" >
            <b>Welcome to Qongfu!</b><br></br>
            <b>How can we help you today?</b>
          </Typography>
          <br></br><br></br>
        <Grid container spacing={1} maxWidth="100%">
          {navcards.map(card => (
            <Grid item key={card} className={classes.grid}>
              <NavCard/>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>

      <main className={classes.main}>
        {/* Hero unit */}
        <div className={classes.heroContent} id="topmenu">
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" fontFamily="Roboto" align="center" color="textSecondary" gutterBottom>
              <b>Welcome to Qongfu</b>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Your Health & Fitness Marketplace
            </Typography>

            <Paper className={classes.search}>
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Place name, location, instructor"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Paper>
            <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
              Explore
            </Fab>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/fitness" variant="h1" className={classes.link} color="secondPrimary">
                    Fitness
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Sports
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Martial Arts
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Wellness
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Recreation
                  </Link>
                </Grid>

              </Grid>
            </div>


          </Container>
        </div>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Typography variant="h4" className={classes.title}>
            Featured Places
          </Typography>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>

            ))}
          </Grid>

          <Divider className={classes.divider} orientation="horizontal" />
        </Container>

        <Container className={classes.cardGrid1}>
          {/* End hero unit */}
          <Typography variant="h4" className={classes.title}>
            Places near you
          </Typography>
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
            ))}
          </Grid>
          <Link href="#" className={classes.link}>
            View all Places (500+) >
          </Link>
          <Divider className={classes.divider} orientation="horizontal" />
        </Container>
        <Container className={classes.cardGrid1} maxWidth="md">
          {/* End hero unit */}
          <Typography variant="h4" className={classes.title}>
            Featured Specialists
          </Typography>
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <UserCard />
              </Grid>

            ))}
          </Grid>

          <Divider className={classes.divider} orientation="horizontal" />
        </Container>
        <Container className={classes.cardGrid1} maxWidth="md">
          {/* End hero unit */}
          <Typography variant="h4" className={classes.title}>
            Specialists in your area
          </Typography>
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <UserCard />
              </Grid>
            ))}
          </Grid>
          <Link href="#" className={classes.link}>
            View all Places (500+) >
          </Link>
          <Divider className={classes.divider} orientation="horizontal" />
        </Container>
      </main>
      {/* Footer */}

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={6} sm container className={classes.leftgrid}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
                    What are we all about?
                </Typography>
                  <Typography variant="body2" align="left" gutterBottom>
                    Qongfu is a community that believe in practice and humility.
                    consectetur adipiscing elit. Morbi efficitur nisi ut facilisis fringilla.
                    Nulla dictum aliquam massa, id tempor enim ultricies a. Sed tempus ipsum massa, at fermentum tortor suscipit ut. Cras porta lorem orci, mattis sodales velit scelerisque and porta. Sed sit amet.
                </Typography>
                </Grid>
                <Grid item>
                  <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
                    More about Qongfu Mobile
              </Fab>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className={classes.rightgrid1}>
              <img className={classes.img} alt="complex" src="4.png" />
            </Grid>
          </Grid>
        </Paper>
      </div>






      <div className={classes.root}>
        <Paper className={classes.paper1}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={6} className={classes.leftgrid1}>
              <img className={classes.img} alt="complex" src="2.png" />
            </Grid>
            <Grid item xs={6} sm container className={classes.rightgrid} id="grid">
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
                    Download our App!
              </Typography>
                  <Typography>
                    The Qungfu App is an on-the-go mobile Health & Fitness Marketplace!
              </Typography>
                  <Typography variant="body2" align="left" gutterBottom>
                    Discover the best Health & Fitness Services and Activities near you!
              </Typography>
                  <Typography variant="body2" align="left" gutterBottom>
                    Looking for a Fitness Trainer? A Wellness or  Sports Specialist? We've got you covered!
              </Typography>
                  <Typography variant="body2" align="left" gutterBottom>
                    Explore the best of what your area or neighboring cities have to offer!
              </Typography>
                </Grid>
                <Grid item>
                  <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
                    More about Qongfu Mobile
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>


      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={6} sm container className={classes.leftgrid}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
                    Qongfu Business
                </Typography>
                  <Typography variant="body2" align="left" gutterBottom>

                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" align="left" gutterBottom>
                    Do you own a Health & Fitness Center or Studio?
              </Typography>
                  <Typography variant="body2" align="left" gutterBottom>
                    Do you offer Sports or Wellness Services?
              </Typography>
                  <Typography variant="body2" align="left" gutterBottom>
                    Are you a Health & Fitness Specialist?
              </Typography>
                  <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
                    More about Qongfu Mobile
              </Fab>

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className={classes.rightgrid1}>
              <img className={classes.img} alt="complex" src="4.png" />
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Footer/>
      <Divider className={classes.divider} orientation="horizontal" />
      <copyright className={classes.copyright}>
        <Copyright />
      </copyright>
    </React.Fragment>
  );
}