import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url("./assets/Image 2.png")',
    backgroundRepeat: "no-repeat",
    flexGlow: 1,
    height: 1000,
    width: '100%',
  },
  logo: {
    left: '5%',
    top: '30px',
    position: 'absolute',
  },


  link: {
    right: '10%',
    top: '45px',
    position: 'absolute',
    fontSize: '20px',
  },
  Paper: {
    margin: 'auto',
    maxWidth: 493,
    position: 'relative',
    marginTop: 200,
    borderRadius: 10,
  },
  notchedOutline: {
    borderRadius: '30px',
  },
  fab: {
    marginLeft: '20%',
    width: '60%',
  },

  success: {
    color: '#0fa016',
    fontSize: '100px',
  }, 

  link1: {
    textDecoration: 'none',
  }


}));

export default function FullWidthTabs() {
  const classes = useStyles();


  return (

    <div className={classes.root}>
      <img src="Layer 2.svg" alt="logo" className={classes.logo} />
      <Link href='#' className={classes.link}>
        Back to home
    </Link>
      <Paper className={classes.Paper}>
        <br></br>
        <Typography align="center">
          <CheckCircleOutlineIcon className={classes.success} align="center" />
        </Typography>
        <Typography variant="h5" color="primary" align="center">
          Your password has been reset
    </Typography>
        <Typography color="textSecondary" align="center">
          You can login now.
    </Typography>   <br></br><br></br>
    <Link to="/login" className={classes.link1}>
        <Fab variant="extended" aria-label="delete" className={classes.fab} color="primary">
          GO TO LOGIN
    </Fab></Link><br></br><br></br><br></br>
      </Paper>
    </div>
  );
}
