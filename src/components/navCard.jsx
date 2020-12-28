import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 100,
  },
  cardContent: {
    flexGrow: 1,
    height: 20,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="./assets/fitness.png"
        title="Image title"
      >
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography  align="center" >
            Fitness
        </Typography>
      </CardContent>
    </Card>
  );
}