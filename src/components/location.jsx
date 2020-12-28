import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 425,
    },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Location 
        </Typography>
        <Link>Directions</Link>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
  );
}