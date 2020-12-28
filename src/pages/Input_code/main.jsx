import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import InputNumber from '../../components/inputNumber';

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
    flexGlow:1,
    height:1000,
    width:'100%',
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
    height:400,
  },

  fab: {
    marginLeft:'30%',
    width: '40%',
    fontSize:'18px',
  },

  input: {
      paddingTop: 50,
  },

  input2: {
      fontSize: '12px',
  },
  link1: {
    textDecoration: 'none',
  }
  
  
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <img src="Layer 2.svg" alt="logo" className={classes.logo}/>
        <Link to='/' className={classes.link}>
            Back to home
        </Link>
        <Paper className={classes.Paper}>
            <Typography variant="h5" component="h2" color="textSecondary" align="center" paddingTop="200px" className={classes.input}>
                Input Code
            </Typography>
            <Typography align="center" color="textSecondary" className = {classes.input2}>
                Type the code that we have sent to you
            </Typography>
            <div align="center">
            <InputNumber/>
            <InputNumber/>
            <InputNumber/>
            <InputNumber/>
            <InputNumber/>
            <InputNumber/></div><br></br><br></br><br></br><br></br>
            <Link to="/reset" className={classes.link1}>
            <Fab variant="extended" aria-label="delete" className={classes.fab} color="primary">
                Submit
            </Fab></Link><br></br><br></br><br></br>
            <Typography color="primary" fontSize="11px" align="center">Resend Code again</Typography>
        </Paper>
    </div>
  );
}
