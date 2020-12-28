import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { Divider, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 140,
  },
  chip:{
      backgroundColor:'#54b948',
      color:'white',
  },
  p: {
      fontSize: '12px',
      color: '#979797',
  },
  divider: {
        height: 28,
        width: 2,
        float:'left',
        marginLeft: 10,
    },
    dividerContent: {
        float:'left',
        marginLeft: 10,
    },
  image: {
      height: '400px',
      width: '100%',
  },
  button: {
    marginRight: 100,
    marginTop: 80,
  },
  rateButton: {
    marginLeft: 20,
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" component="h3" align="left">
              <b>Bull Fitness Longhorn Gym</b>
            </Typography><br></br>
            <Typography component="p" align="left">
              <Chip className={classes.chip} label="OPEN" />
              10:00 am -9.00pm 
            </Typography>
            <Typography className={classes.p} align="left">
              0.86km-Manama, Bahrain
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="right" className={classes.button}>
              <Button variant="outlined" color="primary">
                Chat Now
              </Button>
              <Button variant="outlined" color="primary" className={classes.rateButton}>
                Rate Us
              </Button>
            </Typography>
          </Grid>
        </Grid>
        
        <br></br>
        <Divider/>
        
        <Grid container spacing={3}>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            <Typography align="center">
              <Divider className={classes.divider} orientation="vertical"/>
              <Link className={classes.dividerContent}>General Info</Link>
              <Divider className={classes.divider} orientation="vertical"/>
              <Link className={classes.dividerContent}>Service</Link>
              <Divider className={classes.divider} orientation="vertical"/>
              <Link className={classes.dividerContent}>Media Gallery</Link>
              <Divider className={classes.divider} orientation="vertical"/>
            </Typography>
          </Grid>
          <Grid item xs={4}>

          </Grid>
        </Grid>


        
      </Paper>
  );
}