import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 800,
    },
    image: {
        width: '100%',
    }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" align="left">
          Media Gallery 
        </Typography><br></br>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <img src="./assets/media.png" className={classes.image}></img>
            </Grid>
            <Grid item xs={6}>
                <img src="./assets/media.png" className={classes.image}></img>
            </Grid>
            <Grid item xs={6}>
                <img src="./assets/media.png" className={classes.image}></img>
            </Grid>
            <Grid item xs={6}>
                <img src="./assets/media.png" className={classes.image}></img>
            </Grid>
            <Grid item xs={6}>
                <img src="./assets/media.png" className={classes.image}></img>
            </Grid>
        </Grid>
      </Paper>
  );
}