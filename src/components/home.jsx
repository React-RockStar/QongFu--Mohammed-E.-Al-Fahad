import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { shadows } from '@material-ui/system';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    backgroundColor: '#f8fcff',
    height:'700px',
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGrid1: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth:'80%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardMedia2: { // 16:9
    marginTop:45,
    borderRadius:"50%",
    width:"33%",
    height:"130px",
    margin:"auto",
  },
  cardContent: {
    flexGrow: 1,

  },
  footer: {
    backgroundColor: '#f8fcff',
    padding: theme.spacing(6),
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
    width:300,
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
    height:"600px",
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    backgroundColor:'#f8fcff',
  },
  

  leftgrid:{
    marginLeft:'15%',
    marginTop:'80px',
  },

  leftgrid1:{
    marginLeft:'10%',
    width:'5%',
  },

  rightgrid:{
    marginLeft:'10%',
    marginTop:'80px',
  },

  rightgrid1:{
    marginLeft:'10%',
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
  feedback: {
    width: '90%',
  },
  email: {
    width: '90%',
  },
  submit: {
    marginLeft:'65%',
  },
  open :{
    color: '#54b948',
  },
  star :{
    color: 'white',
  },
  search: {
    padding: '2px 4px',
    display: 'inline-block',
    alignItems: 'center',
    width: '70%',
    marginRight:'20px',
    borderRadius:'24px',
  },
  searchdivider: {
    height: 28,
    margin: 4,
  },
  logo: {
    left:'8%',
    position:'absolute',
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

          <div className={classes.topButtons}>
              <Grid container spacing={2} justify="flex-end">
              <img src="logo.png" className={classes.logo}/>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Explore
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Places
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Specialists
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Maps
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Login or Signup<ExpandMoreIcon/>
                  </Link>
                </Grid>

              </Grid>
            </div>
      
      <main className={classes.main}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
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
                  <Link href="#" variant="h6" className={classes.link}>
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
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="gym.jpg"
                    title="Image title"
                  >
                    <Typography align="right" className={classes.star}>
                    <StarIcon fontSize="small"/><StarIcon fontSize="small"/><StarIcon fontSize="small"/><StarIcon fontSize="small"/><StarBorderIcon  fontSize="small"/>
                    1,000 &nbsp;&nbsp;&nbsp;&nbsp;
                    </Typography>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                    <BeenhereIcon/><b>&nbsp;Maic's Golden Gym</b>
                    </Typography>
                    <Typography>
                      <b className={classes.open}>OPEN</b> | <b>08:00am - 10:00pm</b>
                    </Typography>
                    <Typography>
                      <b>5.47km</b> - Manama, Bahrain
                    </Typography>
                  </CardContent>
                </Card>
              
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
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="gym.jpg"
                    title="Image title"
                  >
                    <Typography align="right" color="red" className={classes.star}>
                    <StarIcon fontSize="small"/><StarIcon fontSize="small"/><StarIcon fontSize="small"/><StarIcon fontSize="small"/><StarBorderIcon  fontSize="small"/>
                    1,000&nbsp;&nbsp;&nbsp;&nbsp;
                    </Typography>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                    <BeenhereIcon/>&nbsp;<b>Maic's Golden Gym</b>
                    </Typography>
                    <Typography>
                    <b className={classes.open}>OPEN</b> | <b>08:00am - 10:00pm</b>
                    </Typography>
                    <Typography>
                    <b>5.47km</b> - Manama, Bahrain
                    </Typography>
                  </CardContent>
                </Card>
              
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
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia2}
                    image="specialist1.jpeg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      <b>Jamie Reid Borja</b>
                    </Typography>
                    <Typography align="center">
                      Taekwondo Trainer
                    </Typography>
                    <Typography align="center">
                    <StarIcon color="primary" fontSize="small"/><StarIcon color="primary" fontSize="small"/><StarIcon color="primary" fontSize="small"/><StarIcon color="primary" fontSize="small"/><StarBorderIcon color="primary" fontSize="small"/>
                    </Typography>
                    <Typography align="center">
                      Manama, Bahrain
                    </Typography>
                  </CardContent>
                </Card>
              
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
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia2}
                    image="specialist1.jpeg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      <b>Jamie Reid Borja</b>
                    </Typography>
                    <Typography align="center">
                      Taekwondo Trainer
                    </Typography>
                    <Typography align="center">
                    <StarIcon color="primary" fontSize="small"/><StarIcon color="primary" fontSize="small"/><StarIcon color="primary" fontSize="small"/><StarIcon color="primary" fontSize="small"/><StarBorderIcon color="primary" fontSize="small"/>
                    </Typography>
                    <Typography align="center">
                      Manama, Bahrain
                    </Typography>
                  </CardContent>
                </Card>
              
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
          <Grid item xs={6} sm container className={classes.rightgrid}>
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


      <footer className={classes.footer}>
      <Container className={classes.cardGrid} >
      <Grid container spacing={4}>
        <Grid item  xs={12} sm={6} md={4}>
          <Typography gutterBottom variant="h5" component="h2">
            Navigate Qongfu
          </Typography>
          <Typography>
            Explore Qongfu
          </Typography>
          <Typography>
            About Us
          </Typography>
          <Typography>
            Qongfu Mobile
          </Typography>
          <Typography>
            Qongfu Business
          </Typography>
        </Grid> 
        <Grid item  xs={12} sm={6} md={4}>
          <Typography>
            Terms and Conditions
          </Typography>
          <Typography>
            Privacy Statement
          </Typography>
          <Typography>
            Sitemap
          </Typography>
        </Grid> 
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.email}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Feedback"
            className={classes.feedback}
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            placeholder="If you have any questions, suggestions or feedback feel free to share it with us"
            multiline={true}
            rows={3}
          />
          <Typography>
          <Fab variant="extended" color="primary" aria-label="add" className={classes.submit}>
            Submit
          </Fab>
          </Typography>
        </Grid>
        
      </Grid>
      
      </Container>
      </footer>
      <Divider className={classes.divider} orientation="horizontal" />
      <copyright className={classes.copyright}>
        <Copyright/>
      </copyright>
    </React.Fragment>
  );
}