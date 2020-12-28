import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
//import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f8fcff',
    
    flexGlow:1,
  },
  logo: {
    left:'5%',
    top:'30px',
    position:'absolute',
  },


  link: {
    right:'10%',
    top: '45px',
    position:'absolute',
    fontSize:'20px',
  },
  Paper :{
    margin: 'auto',
    maxWidth : 493,
    position:'relative',
    marginTop:200,
  },
  p :{
    color:'#919191',
    display:'inline-block',
    fontSize:'12px',
  },
  p1 :{
    color:'#0092DD',
    display:'inline-block',
    fontSize:'12px',
  },
  p2 :{
    color:'#919191',
    fontSize:'12px',
  },

  email: {
    width: '100%',
  },
  notchedOutline: {
    borderRadius: '30px',
  },
  test:{
      width:'100%',
  },
  fab: {
    marginLeft:'20%',
    width: '60%',
  },
  icon: {
      marginRight: '15%',
  },
  hr: {
    display: 'inline-block',
  },
  tab:{
      borderTopLeftRadius: '10px',
      borderTopRightRadius:'10px',
      width:'100%',
      marginTop:'-16px',
  },

  link1: {
    textDecoration: 'none',
  }
  
  
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    
    <div className={classes.root}>
    <img src="Layer 2.svg" alt="logo" className={classes.logo}/>
    <Link to="/" className={classes.link}>
        Back to home
    </Link>
    <Paper className={classes.Paper}>
      <AppBar position="static" color="default" className={classes.tab}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >   
          <Tab label="Sign up" {...a11yProps(0)} />
          <Tab label="Sign-in" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography variant="h5" component="h2" color="textSecondary" align="center">
                Join Qongfu today
            </Typography>
            <TextField
                label="email"
                className={classes.email}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                placeholder="Type your email here..."
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            >
                <VisibilityIcon color="primary"/>
            </TextField>
            
            <TextField
                label="password"
                className={classes.email}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                placeholder="Your secured password"
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            />
            <TextField
                label="Confirm password"
                className={classes.email}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                placeholder="Confirm your secured password"
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            />
            <div className={classes.test}>
                <Checkbox
                    value="checkedB"
                    color="primary"
                    inputProps={{
                    'aria-label': 'secondary checkbox',
                    }}
                />
                <p className={classes.p}>
                    I have already with the&nbsp;</p><p className={classes.p1}><u>Terms & Conditions,&nbsp;</u></p><p className={classes.p}>and the</p> <p className={classes.p1}><u>Privacy Policy</u></p><p className={classes.p}> as defined by Qongfu</p>
            </div>
            <Link to="/success" className={classes.link1}>
            <Fab variant="extended" aria-label="delete" className={classes.fab} color="primary">
                SIGN UP NOW
            </Fab></Link><br></br><br></br>
            <Typography color="textSecondary" className={classes.p2} align="center">
                <hr width="30%" className={classes.hr}></hr>or singup with<hr width="30%" className={classes.hr}></hr>
            </Typography>

            <div align="center">
                <img src="./assets/facebook.svg" alt="facebook" className={classes.icon}/>
                <img src="./assets/search.svg" alt="google" className={classes.icon}/>
                <img src="./assets/twitter.png" alt="twitter"/>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Typography variant="h5" component="h2" color="textSecondary" align="center">
                Login to Qongfu
            </Typography>
            <TextField
                className={classes.email}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                placeholder="Type your email here..."
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            >
                <VisibilityIcon color="primary"/>
            </TextField>
            
            <TextField
                className={classes.email}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                placeholder="Your secured password"
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            />
            
            <div className={classes.test}>
                <Checkbox
                    value="checkedB"
                    color="primary"
                    inputProps={{
                    'aria-label': 'secondary checkbox',
                    }}
                />
                <p className={classes.p}>
                    Remember me</p><br></br>
            </div>
            <Fab variant="extended" aria-label="delete" className={classes.fab} color="primary">
              SiGN IN
            </Fab><br></br><br></br>
            <Link to="/email">
              <Typography color="primary" align="center" fontSize="11px">
                  <b>Forgot password?</b>
              </Typography><br></br>
            </Link>
            <Typography color="textSecondary" className={classes.p2} align="center">
                <hr width="30%" className={classes.hr}></hr>or singup with<hr width="30%" className={classes.hr}></hr>
            </Typography><br></br>
            <div align="center">
                <img src="./assets/facebook.svg" alt="facebook" className={classes.icon}/>
                <img src="./assets/search.svg" alt="google" className={classes.icon}/>
                <img src="./assets/twitter.png" alt="twitter"/>
            </div>
        </TabPanel>
      </SwipeableViews>
      </Paper>
    </div>
  );
}
